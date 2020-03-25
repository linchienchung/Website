<template>
    <div class="container">
        <div class="parent-line-div">
            <div class="line-div">
                <h2><span>門診資訊</span></h2>
            </div>
        </div>
        <br>
        <div :id="item.id" v-bind:key="item.id" v-for="item in appointment_info">
            <br>
            <h3>{{item.name}}</h3>
            <h5 class="notbold">{{item.location}}</h5>
            <h5 class="notbold">{{item.phone}}</h5>
            <div class="parent-table">
                <div class="frame">
                    <div class="left">
                        <div style="display: inline-block; float: right;">
                            <iframe height="360px;" frameborder="0"
                                    style="border:0; padding-top:30px;padding-left:30px;position: relative;"
                                    :src="item.map+'&key='+key" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="right" style="color: black;">
                        <div class="timetable" style="padding-top: 5rem;margin-left: 50px">
                            <div class="time">
                                <span style="text-align: left;">門診時間：</span>
                                <br/>
                                <ul>
                                    <li v-bind:key="time" v-for="time in item.open_time">{{time}}</li>
                                </ul>
                                <span>現場掛號時間：</span>
                                <br>
                                <ul>
                                    <li v-bind:key="time" v-for="time in item.appointment_time">{{time}}</li>
                                </ul>
                                <div class="timebutton">
                                    <a :href="item.link">
                                        <button class="tbutton"><span style="margin: 10px;">網路掛號</span></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr v-if="item.id!==2">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Appointment",
        data() {
            return {
                key: "AIzaSyAh-FsthYJRcBf6o2GAuEaCegJA73rQWcM",
                appointment_info: [{
                    id: 0,
                    name: "803國軍台中總醫院",
                    location: "臺中市太平區中山路二段348號",
                    phone: "電話：(04)2393-4191#12",
                    map: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkSOIyKAiaTQR2imqH-GbRJc",
                    link: "https://web-reg-server.803.org.tw/start.asp",
                    open_time: ["星期四早上 8：30 ～", "星期五早上 8：30 ～"],
                    appointment_time: ["上午 8：00 ～ 11：00"]
                }, {
                    id: 1,
                    name: "816國軍台中總醫院中清分院",
                    location: "台中市北區忠明路500號",
                    phone: "電話：(04)2203-3178#12",
                    map: "https://www.google.com/maps/embed/v1/place?q=816%E5%9C%8B%E8%BB%8D%E5%8F%B0%E4%B8%AD%E7%B8%BD%E9%86%AB%E9%99%A2%E4%B8%AD%E6%B8%85%E5%88%86%E9%99%A2",
                    link: "https://web-reg-server.803.org.tw/start.asp",
                    open_time: ["星期二早上 8：30 ～"],
                    appointment_time: ["上午 8：00 ～ 11：00"]
                }, {
                    id: 2,
                    name: "台中大甲李綜合醫院",
                    location: "台中市大甲區八德街2號",
                    phone: "電話：(04)26862288",
                    map: "https://www.google.com/maps/embed/v1/place?q=%E5%A4%A7%E7%94%B2%E6%9D%8E%E7%B6%9C%E5%90%88%E9%86%AB%E9%99%A2",
                    link: "http://www.leehospital.com.tw/reg-c/main.htm",
                    open_time: ["星期六早上 8：30 ～"],
                    appointment_time: ["上午 7：00 ～ 11：00"]
                },]
            }
        }
        ,
    }
</script>

<style scoped>
    .notbold {
        font-weight: normal
    }

    .parent-table {
        text-align: center;
        position: relative;
    }

    .timebutton {
        text-align: center;
    }

    .time {
        text-align: left;
    }

    .timetable {
        padding: 30px;
        margin-top: 0;
        display: flex;
        width: 300px;
        height: 360px;
        color: black;
        position: relative;
        border-color: black;
        border-width: 1px;
    }

    .frame {
        display: inline-block;
        margin: 0 auto;
    }

    .left {
        -ms-flex-order: 1;
        order: 1;
        -webkit-box-flex: 2; /* OLD - iOS 6-, Safari 3.1-6 */
        -moz-box-flex: 2; /* OLD - Firefox 19- */
        -webkit-flex: 2; /* Chrome */
        -ms-flex: 2; /* IE 10 */
        flex: 2; /* NEW, Spec - Opera 12.1, Firefox 20+ */
        width: auto;
        text-align: right;
        /*background-color: #CCC;*/
        display: inline-block;
        float: left;
    }

    .right {
        -ms-flex-order: 2;
        order: 2;
        -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
        -moz-box-flex: 1; /* OLD - Firefox 19- */
        -webkit-flex: 1; /* Chrome */
        -ms-flex: 1; /* IE 10 */
        flex: 1; /* NEW, Spec - Opera 12.1, Firefox 20+ */
        color: white;
        /*border: 1px solid black;*/
        width: auto;
        -webkit-box-ordinal-group: 2; /* OLD - iOS 6-, Safari 3.1-6 */
        -moz-box-ordinal-group: 2; /* OLD - Firefox 19- */
        /*width: 50%;*/
        /*text-align: right;*/
        display: inline-block;

    }

    .tbutton {
        display: inline-block;
        margin-left: 15px;
        font-size: 20px;
        border-color: #004091;
        border-width: 2px;
        color: #004091;
        padding: 5px;
    }

    @media screen and (max-width: 700px) {
        .frame {
            -webkit-box-orient: vertical;
            -moz-box-orient: vertical;
            -webkit-box-direction: normal;
            -moz-box-direction: normal;
            /*box-orient: vertical;*/
            -ms-flex-direction: column;
            -webkit-flex-direction: column;
            flex-direction: column;
        }
    }
</style>