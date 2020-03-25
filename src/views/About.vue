<template>
    <div class="container">
        <div class="parent-table">
            <div class="frame">
                <div class="left">
                    <div style="display: inline-block; float: right;">
                        <img src="../assets/photo.jpg" alt="Photo">
                    </div>
                </div>
                <div class="right" style="color: black;">
                    <div class="timetable" style="padding-top: 10vh;margin-left: 50px">
                        <div class="time">
                            <span style="text-align: left;">姓名：林建中</span>
                            <br/>
                            <span style="text-align: left;">現任</span>
                            <br/>
                            <ul>
                                <li v-bind:key="i" v-for="i in current">{{i}}</li>
                            </ul>
                            <span>學歷</span>
                            <br>
                            <ul>
                                <li v-bind:key="i" v-for="i in education">{{i}}</li>
                            </ul>
                            <br>
                            <div class="timebutton">
                                <a>
                                    <button class="tbutton"><span style="margin: 10px;">完整資訊</span></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        props: {
            msg: String
        },
        data() {
            return {
                current: ["國軍台中總醫院骨科部主任", "國防醫學院醫學系兼任助理教授"],
                education: ["​國立中興大學材料科學與工程系博", "國防醫學院醫學士"],
                experience_abridged: ["國軍台中總醫院中清分院副院長", "中華民國外科專科醫師", "中華民國骨科專科醫師",],
                experience: ["國軍台中總醫院中清分院副院長", "國軍臺中總醫院教研部主任",
                    "中華民國外科專科醫師", "中華民國骨科專科醫師", "台北榮總骨科部研究醫師", "中華民國脊椎專科醫師",
                    "中華民國脊椎微創專科醫師", "中華民國關節重建專科醫師", "海岸巡防第八指揮部8848醫務所中尉醫官"],
                member: ["中華民國脊椎外科醫學會會員", "中華民國關節重建醫學會會員",
                    "臺灣脊椎微創醫學會會員", "臺灣英索關節醫學會會員", "台灣英索(Insall)人工關節學會會員"],
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    /*ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }*/

    a {
        color: #42b983;
    }

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
        padding-top: 10px;
        padding-left: 30px;
        padding-right: 30px;
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
