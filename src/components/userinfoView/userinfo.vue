<template>
  <div class="userinfo-big-box">
    <div class="userinfo-box">
      <h1>
        个人信息
        <a-button type="primary" status="warning" size="mini" @click="() => $router.push('/index')">返回首页</a-button>
      </h1>
      <div class="userinfo-data-content">
        <a-descriptions style="margin: 40px 20px" :data="userInfo" size="large" :column="1"/>
        <a-space size="large" class="userinfo-avatar">
          <a-avatar v-if="userAvatar.avatar" :size="164">
            <img
                alt="avatar"
                :src="userAvatar.avatar"
            />
          </a-avatar>
          <a-avatar v-else :size="164">
            {{ userInfo[0].value }}
          </a-avatar>
        </a-space>
      </div>
      <div>
        <!-- 更新用户信息表单 -->
        <a-button type="primary" status="warning" @click="showUpdateForm">更新信息</a-button>
        <a-modal v-model:visible="updateFormVisible" title="更新信息" @cancel="cancelUpdateForm" @ok="updateUserInfo">
          <a-form :model="form">
            <a-form-item label="姓名" field="name">
              <a-input v-model="form.name"/>
            </a-form-item>
            <a-form-item label="手机" field="phone">
              <a-input v-model="form.phone"/>
            </a-form-item>
            <a-form-item label="性别" field="sex">
              <a-radio-group v-model="form.sex">
                <a-radio value="男">男</a-radio>
                <a-radio value="女">女</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="头像" field="avatar">
              <a-upload
                  action="/api/user/common/upload"
                  :show-file-list="false"
                  @change="onChange"
                  @progress="onProgress"
                  @success="onSuccess"
              >
                <template #upload-button>
                  <div
                      :class="`arco-upload-list-item${file && file.status === 'error' ? ' arco-upload-list-item-error' : ''}`"
                  >
                    <div
                        class="arco-upload-list-picture custom-upload-avatar"
                        v-if="file && file.url"
                    >
                      <img :src="file.url" alt="头像"/>
                      <div class="arco-upload-list-picture-mask">
                        <IconEdit/>
                      </div>
                      <a-progress
                          v-if="file.status === 'uploading' && file.percent < 100"
                          :percent="file.percent"
                          type="circle"
                          size="mini"
                          :style="{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translateX(-50%) translateY(-50%)',
                          }"
                      />
                    </div>
                    <div class="arco-upload-picture-card" v-else>
                      <div class="arco-upload-picture-card-text">
                        <IconPlus/>
                        <div style="margin-top: 10px; font-weight: 600">上传</div>
                      </div>
                    </div>
                  </div>
                </template>
              </a-upload>
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
      <!-- 增加收货地址表单 -->
      <a-form :model="addressForm" label-width="80px" class="userinfo-form">
        <a-form-item label="收货地址">
          <a-input v-model="addressForm.address"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" status="warning" @click="addAddress">增加收货地址</a-button>
        </a-form-item>
      </a-form>

      <!-- 修改默认地址 -->
      <a-form :model="defaultAddressForm" label-width="80px" class="userinfo-form">
        <a-form-item label="选择默认地址">
          <a-select v-model="defaultAddressForm.address" placeholder="请选择地址" @change="alterDefaultAddress">
            <a-option
                v-for="address in addresses"
                :key="address.id"
                :value="address.completeAddress"
            >
              {{ address.completeAddress }}
            </a-option>
          </a-select>
        </a-form-item>
      </a-form>

      <!--  显示用户购买过的商品  -->
      <div class="userinfo-buy-goods">
        <h1>购买记录</h1>
        <a-list>
          <a-list-item v-for="(item, idx) in purchasedGoods" :key="idx">
            <a-list-item-meta
                :title="item.description"
                :description="`购买数量: ${item.number}, 单价: ${item.price},购买时间: ${formatDate(item.createTime)}`"
            >
              <template #avatar>
                <a-avatar shape="square">
                  <img :alt="item.description" :src="item.image" />
                </a-avatar>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserInfo, alterUserInfo, addUserAddress, updateDefaultAddress, getAddressList, getPurchasedGoods} from "@/api/userinfo";
import {ElMessage} from "element-plus";
import {ref, onMounted} from "vue";
import store from "@/store";
import {IconEdit, IconPlus} from '@arco-design/web-vue/es/icon';

export default {
  name: 'userinfoView',
  components: {IconPlus, IconEdit},
  setup() {
    const userInfo = ref([
      {label: '姓名', value: ''},
      {label: '手机', value: ''},
      {label: '性别', value: ''},
      {label: '默认收货地址', value: ''},
    ]);

    const form = ref({
      name: '',
      phone: '',
      sex: '',
      avatar: ''
    });

    // 上传头像
    const file = ref();
    const onChange = (_, currentFile) => {
      // console.log(currentFile)
      if (currentFile.file.type !== 'image/jpeg' && currentFile.file.type !== 'image/png') {
        ElMessage.error('请选择 jpg 或 png 格式的图片');
        return;
      }
      if (currentFile.file.size > 1024 * 1024) {
        ElMessage.error('图片大小不能超过 1MB');
        return;
      }
      // console.log(file.value)
      file.value = {
        // 覆盖默认的 file 对象
        ...currentFile,
      };
    };

    // 处理文件上传进度事件
    const onProgress = (currentFile) => {
      file.value = currentFile;
    };

    // 处理文件上传成功事件
    const onSuccess = (fileItem) => {
      // 上传到alioss后的图片路径
      // console.log(fileItem.response.data)
      ElMessage.success('上传成功');
      form.value.avatar = fileItem.response.data
    };

    const userAvatar = ref({
      avatar: ''
    });

    const addressForm = ref({
      address: ''
    });

    const defaultAddressForm = ref({
      addressBookId: '',
      address: ''
    });

    const addresses = ref([]);

    const updateFormVisible = ref(false);

    // 获取用户信息
    const fetchUserInfo = async () => {
      try {
        const res = await getUserInfo(store.state.id);
        if (res.data.code === 1) {
          const data = res.data.data;
          userInfo.value = [
            {label: '姓名', value: data.name},
            {label: '手机', value: data.phone},
            {label: '性别', value: data.sex === 1 ? '男' : '女'},
            {label: '默认收货地址', value: data.address},
          ];
          userAvatar.value = {
            avatar: data.avatar
          };
          form.value = {
            name: data.name,
            phone: data.phone,
            sex: data.sex,
            avatar: data.avatar
          };

          // 修改store里面存储的用户信息
          store.commit("setUserAvatar", data.avatar)
          store.commit("setUsername", data.name)
          store.commit("setPhoneNumber", data.phone)
        } else {
          ElMessage.error("获取个人信息失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "获取个人信息异常，请重新登录！");
      }
    };

    // 显示更新用户信息表单
    const showUpdateForm = () => {
      updateFormVisible.value = true;
      // 初始化更新信息表单的数据
      form.value = {
        name: userInfo.value[0].value,
        phone: userInfo.value[1].value,
        sex: userInfo.value[2].value
      };
    };

    const cancelUpdateForm = () => {
      updateFormVisible.value = false;
    };

    // 更新用户信息
    const updateUserInfo = async () => {
      try {
        const data = {
          id: store.state.id,
          name: form.value.name,
          phone: form.value.phone,
          sex: form.value.sex === '男' ? 1 : 0,
          avatar: form.value.avatar
        }
        // console.log("data:" + data)
        const res = await alterUserInfo(data);
        if (res.data.code === 1) {
          ElMessage.success("更新信息成功！");
          fetchUserInfo();
          updateFormVisible.value = false; // 关闭更新信息的弹窗
        } else {
          ElMessage.error("更新信息失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "更新信息失败！");
      }
    };

    // 增加用户收货地址
    const addAddress = async () => {
      // fix 修复没有填写收货地址，还添加成功的bug
      // console.log(addressForm.value.address)
      if(addressForm.value.address){
        const addressData = {
          userId: store.state.id,
          sex: form.value.sex === '男' ? 1 : 0,
          phone: form.value.phone,
          completeAddress: addressForm.value.address
        }
        try {
          const res = await addUserAddress(addressData);
          if (res.data.code === 1) {
            ElMessage.success("增加收货地址成功！");
            addressForm.value = {}
            fetchUserInfo();
            fetchAddresses()
          } else {
            ElMessage.error("增加收货地址失败！");
          }
        } catch (err) {
          ElMessage.error(err.message || "增加收货地址失败！");
        }
      } else {
        ElMessage.error("请填写收货地址！");
      }
    };

    // 查询该用户所有地址
    const fetchAddresses = async () => {
      try {
        const res = await getAddressList(store.state.id);
        if (res.data.code === 1) {
          addresses.value = res.data.data;
          // console.log(addresses.value)
          // 默认地址
          for (let i = 0; i < addresses.value.length; i++) {
            if (addresses.value[i].isDefault === 1) {
              defaultAddressForm.value = {
                addressBookId: addresses.value[i].id,
                address: addresses.value[i].completeAddress
              }
              // console.log(defaultAddressForm.value)
            }
          }
        } else {
          ElMessage.error("获取收货地址失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "获取收货地址失败！");
      }
    };

    // 修改默认地址
    const alterDefaultAddress = async () => {
      // console.log(defaultAddressForm.value)
      const selectedAddress = addresses.value.find(
          address => address.completeAddress === defaultAddressForm.value.address
      );
      if (selectedAddress) {
        const newDefaultAddressId = selectedAddress.id;
        const data = {
          userId: store.state.id,
          // 旧地址薄id
          oldAddressBookId: defaultAddressForm.value.addressBookId,
          // 新地址薄id
          newAddressBookId: newDefaultAddressId,
          newAddress: defaultAddressForm.value.address
        }
        try {
          const res = await updateDefaultAddress(data);
          if (res.data.code === 1) {
            ElMessage.success("修改默认地址成功！");
            fetchUserInfo();
            // 重新获取地址 fix 原地址一直不变的bug
            fetchAddresses();
          } else {
            ElMessage.error("修改默认地址失败！");
          }
        } catch (err) {
          ElMessage.error(err.message || "修改默认地址失败！");
        }
      } else {
        ElMessage.error("请选择一个地址作为默认地址！");
      }
    }

    // 获取用户已购买的商品
    const purchasedGoods = ref([]);

    const fetchPurchasedGoods = async () => {
      try {
        const res = await getPurchasedGoods(store.state.id);
        if (res.data.code === 1) {
          purchasedGoods.value = res.data.data;
        } else {
          ElMessage.error("获取已购买的商品失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "获取已购买的商品失败！");
      }
    };

    // 格式化时间 "createTime": [2024,7,15,23,16,9] 转为 "2024年7月15日 23:16:9"
    const formatDate = (createTime) => {
      if (!Array.isArray(createTime) || createTime.length !== 6) {
        return '无效日期';
      }

      const [year, month, day, hour, minute, second] = createTime;

      return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
    };

    onMounted(() => {
      fetchUserInfo();
      fetchAddresses();
      fetchPurchasedGoods();
      if (userAvatar.value.avatar) {
        file.value = {
          url: userAvatar.value.avatar
        };
      }
    });

    return {
      userInfo,
      form,
      userAvatar,
      addressForm,
      defaultAddressForm,
      addresses,
      updateFormVisible,
      file,
      onChange,
      onProgress,
      onSuccess,
      showUpdateForm,
      cancelUpdateForm,
      updateUserInfo,
      addAddress,
      alterDefaultAddress,
      fetchAddresses,
      fetchPurchasedGoods,
      purchasedGoods,
      formatDate,
    };
  },
};
</script>

<style>
.userinfo-box {
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin: 40px auto;
  padding: 0 20px;
  max-width: 800px;
  height: 100%;
  background-color: #fff;
  min-width: 492px;
}

.userinfo-form {
  margin-top: 20px;
}

.userinfo-data-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 422.5px;
}

.userinfo-avatar {
  margin-right: 20px;
}
</style>
