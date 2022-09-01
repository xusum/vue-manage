<template>
    <div>
        <el-row class="home" :gutter="20">
            <el-row :span="8" style="magin-top:20px;">
                <el-card shadow="hover">
                    <div class="user">
                        <img v-bind:src="userImg" />
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info"></div>
                </el-card>
            </el-row>
        </el-row>
    </div>
</template>

<script>
    export default{
        name: 'home',
        data (){
            return{
                userImg: require('')
            }
        }
    }
</script>