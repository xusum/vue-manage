<template>
    <header>
        <div class="l-content">
            <el-button v-on:click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <!-- <h3 style="color: #fff">首页</h3> -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in tags" v-bind:key="item.path"  :to="{ path: item.path}">{{item.label}}</el-breadcrumb-item>
               
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="hover" size="mini">
                <span>
                    <img v-bind:src="userImg" class="user">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
import userImg from '../assets/images/user.png'
import { mapState } from 'vuex'
export default {
    name: 'CommonHeader',
    data() {
        return {
            userImg: userImg
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    },
    computed:{
        ...mapState({
            tags: state => state.tab.tabsList
        })
    }
}
</script>
<style lang="less">
header {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color: #F8F8FF;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color:#696969;
}
</style>
