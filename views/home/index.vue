<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:10px;">
            <el-card shadow="hover">
                <div class="user">
                    <img v-bind:src="userImg" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2022.9.1</span></p>
                    <p>上次登录地址：<span>北京</span></p>
                </div>
            </el-card>
            <el-card style="margin-top:20px; ">
                <el-table style="padding: -20px;" :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" v-bind:key="key" v-bind:prop="key"
                        v-bind:label="val">
                    </el-table-column>

                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top:10px">
            <div class="num">
                <el-card v-for="item in countData" v-bind:key="item.name"
                    v-bind:body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" v-bind:class="`el-icon-${item.icon}`" v-bind:style="{ background: item.color }">
                    </i>
                    <div class="detail">
                        <p class="num">💵{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 260px">
                <!-- <div style="height: 280px" ref="echarts"></div> -->
                <echart :chartData="echartData.order" style="height: 240px"> </echart>
            </el-card>
            <div class="graph">
                <el-card style="height: 240px">
                    <!-- <div style="height: 200px" ref="userEcharts"></div> -->
                    <echart :chartData="echartData.user" style="height: 220px"> </echart>
                </el-card>
                <el-card style="height: 240px">
                    <!-- <div style="height: 180px" ref="tableEcharts"></div> -->
                    <echart :chartData="echartData.video" :isAxisChart="false"  style="height: 200px"> </echart>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../../api/data.js'
import Echart from '../../src/components/ECharts.vue'

export default {
    name: 'home',
    components: {
        Echart
    },
    data() {
        return {
            userImg: require('../../src/assets/images/user.png'),
            tableData: [],
            tableDatas: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '三星',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总共购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
            echartData: {
                order: {
                    xData: [],
                    series: []
                },
                user: {
                    xData: [],
                    series: []
                },
                video: {
                    series: []
                }
            }

        }
    },
    mounted() {
        getData().then(res => {
            const { code, data } = res.data
            if (code === 20000) {
                this.tableData = data.tableData
                const order = data.orderData
                const keyArray = Object.keys(order.data[0])
                const xData = order.date
                const series = []
                keyArray.forEach(key => {
                    series.push({
                        name: key,
                        data: order.data.map(item => item[key]),
                        type: 'line'
                    })
                })

                //折线图
                this.echartData.order.xData = xData
                this.echartData.order.series = series
               
                // 柱状图
                this.echartData.user.xData = data.userData.map(item => item.date)
                this.echartData.user.series = [
                    {
                        name: '新增用户',
                        data: data.userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: data.userData.map(item => item.active),
                        type: 'bar'
                    }
                ]

                // 饼图
                this.echartData.video.series = [
                    {
                        type: 'pie',
                        data: data.videoData,

                    }
                ]
            }
            // console.log(res);
        })
    }
}
</script>

<style lang="less">
/deep/.el-card__body {
    padding: 0;
}
</style>
