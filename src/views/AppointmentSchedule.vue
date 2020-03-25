<template>
    <div class="container">
        <div class="parent-line-div">
            <div class="line-div">
                <h2><span>線上掛號</span></h2>
            </div>
        </div>
        <br>
        <div class="card-columns" id="v-for-object">
            <a href="https://web-reg-server.803.org.tw/start.asp">
                <div class="card text-center">
                    <img class="card-img-top lazy" src="../assets/803.jpg" alt="foo"/>
                    <div class="card-body">
                        <h3 class="card-title">803國軍台中總醫院</h3>
                    </div>
                </div>
            </a>
            <a href="https://web-reg-server.803.org.tw/start.asp">
                <div class="card text-center">
                    <img class="card-img-top lazy" src="../assets/816.jpg" alt="foo"/>
                    <div class="card-body">
                        <h3 class="card-title">816國軍中清分院</h3>
                    </div>
                </div>
            </a>
            <a href="http://www.leehospital.com.tw/reg-c/main.htm">
                <div class="card text-center">
                    <img class="card-img-top lazy" src="../assets/leehospital.jpg" alt="foo"/>
                    <div class="card-body">
                        <h3 class="card-title">台中大甲李綜合醫院</h3>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppointmentSchedule",
    }
</script>

<style scoped>

</style>