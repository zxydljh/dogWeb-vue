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
              >
                <template #upload-button>
                  <div
                      :class="`arco-upload-list-item${file && file.status === 'error' ? ' arco-upload-list-item-error' : ''}`"
                  >
                    <div
                        class="arco-upload-list-picture custom-upload-avatar"
                        v-if="file && file.url"
                    >
                      <img :src="file.url"/>
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
          <a-select v-model="defaultAddressForm.address" placeholder="请选择地址">
            <a-select-option
                v-for="address in addresses"
                :key="address.id"
                :value="address.address"
            >
              {{ address.address }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" status="warning" @click="alterDefaultAddress">修改默认地址</a-button>
        </a-form-item>
      </a-form>
      <!--  显示用户购买过的商品  -->
      <div class="userinfo-buy-goods">
        <h1>购买记录</h1>
        <a-list>
          <a-list-item v-for="idx in 4" :key="idx">
            <a-list-item-meta
                title="Beijing Bytedance Technology Co., Ltd."
                description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
            >
              <template #avatar>
                <a-avatar shape="square">
                  <img
                      alt="avatar"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                  />
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
import {getUserInfo, alterUserInfo, addUserAddress, updateDefaultAddress} from "@/api/userinfo";
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
      file.value = {
        ...currentFile,
        // url: URL.createObjectURL(currentFile.file),
      };
    };
    const onProgress = (currentFile) => {
      file.value = currentFile;
    };

    const userAvatar = ref({
      avatar: ''
    });

    const addressForm = ref({
      address: ''
    });

    const defaultAddressForm = ref({
      address: ''
    });

    const addresses = ref([]);

    const updateFormVisible = ref(false);

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
          addresses.value = data.addresses || [];
          userAvatar.value = {
            avatar: data.avatar
          };
          form.value = {
            name: data.name,
            phone: data.phone,
            sex: data.sex,
            avatar: data.avatar
          };
        } else {
          ElMessage.error("获取个人信息失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "获取个人信息异常，请重新登录！");
      }
    };

    const updateUserInfo = async () => {
      try {
        const res = await alterUserInfo(store.state.id, form.value);
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

    const addAddress = async () => {
      try {
        const res = await addUserAddress(store.state.id, addressForm.value);
        if (res.data.code === 1) {
          ElMessage.success("增加收货地址成功！");
          fetchUserInfo();
        } else {
          ElMessage.error("增加收货地址失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "增加收货地址失败！");
      }
    };

    const alterDefaultAddress = async () => {
      try {
        const res = await updateDefaultAddress(store.state.id, defaultAddressForm.value);
        if (res.data.code === 1) {
          ElMessage.success("修改默认地址成功！");
          fetchUserInfo();
        } else {
          ElMessage.error("修改默认地址失败！");
        }
      } catch (err) {
        ElMessage.error(err.message || "修改默认地址失败！");
      }
    };

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

    onMounted(() => {
      fetchUserInfo();
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
      showUpdateForm,
      cancelUpdateForm,
      updateUserInfo,
      addAddress,
      alterDefaultAddress
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
