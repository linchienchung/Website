<template>
    <div id="app">
        <div id="nav">
            <b-navbar id="nav_bar" toggleable="md" type="light" variant="light">
                <b-navbar-brand href="#">目錄</b-navbar-brand>
                <b-navbar-toggle id="collapse-button" target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">首頁</b-nav-item>
                        <b-nav-item-dropdown class="nav-item" text="醫師介紹" right>
                            <b-dropdown-item class="nav-item" to="/about">醫師介紹</b-dropdown-item>
                            <b-dropdown-divider/>
                            <b-dropdown-item class="nav-item" href="#/about">學經歷</b-dropdown-item>
                            <b-dropdown-item class="nav-item" href="#">演講經歷</b-dropdown-item>
                            <b-dropdown-item class="nav-item" href="#">學術研究</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item to="/appointment-info">門診資訊</b-nav-item>
                        <b-nav-item to="/appointment-schedule">線上掛號</b-nav-item>
                        <b-nav-item-dropdown text="案例分享" right>
                            <b-dropdown-item to="/cases">案例分享</b-dropdown-item>
                            <b-dropdown-divider/>
                            <b-dropdown-item href="#">膝關節</b-dropdown-item>
                            <b-dropdown-item href="#">髖關節</b-dropdown-item>
                            <b-dropdown-item href="#">脊椎</b-dropdown-item>
                            <b-dropdown-item href="#">運動/職業傷害</b-dropdown-item>
                            <b-dropdown-item href="#">骨折</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="了解骨頭問題" right>
                            <b-dropdown-item to="/problems">了解骨頭問題</b-dropdown-item>
                            <b-dropdown-divider/>
                            <b-dropdown-item href="#">膝關節</b-dropdown-item>
                            <b-dropdown-item href="#">髖關節</b-dropdown-item>
                            <b-dropdown-item href="#">脊椎</b-dropdown-item>
                            <b-dropdown-item href="#">運動/職業傷害</b-dropdown-item>
                            <b-dropdown-item href="#">骨折</b-dropdown-item>
                            <b-dropdown-item href="#">骨質酥鬆</b-dropdown-item>
                            <b-dropdown-item href="#">筋骨痠痛</b-dropdown-item>
                            <b-dropdown-item href="#">五十肩</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="術後保養須知" right>
                            <b-dropdown-item to="/rehabilitation">術後保養須知</b-dropdown-item>
                            <b-dropdown-divider/>
                            <b-dropdown-item href="#">膝關節</b-dropdown-item>
                            <b-dropdown-item href="#">髖關節</b-dropdown-item>
                            <b-dropdown-item href="#">脊椎</b-dropdown-item>
                            <b-dropdown-item href="#">運動/職業傷害</b-dropdown-item>
                            <b-dropdown-item href="#">骨折</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <div class="progress-container">
                <div class="progress-bar" id="bar"></div>
            </div>
            <router-view/>
        </div>
        <br>
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:&nbsp;林建中醫師</div>
        </footer>
    </div>
</template>
<script>
    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("bar").style.width = scrolled + "%";
    };

    export default {

        data() {
            return {
                show: document.documentElement.scrollHeight > 800
            }
        },
        methods: {},
    }
</script>
<style>
    .progress-container {
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 8px;
        background: #ccc;
    }

    .progress-bar {
        height: 8px;
        background: #4caf50;
        width: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #collapse-button {
        color: black;
    }

    #nav_bar {
        /*overflow: scroll;*/
        z-index: 10;
        position: sticky;
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
    }

    .nav-item {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .container {
        padding-top: 2rem;
        padding-left: unset;
        padding-right: unset;
        padding-bottom: unset;
    }

    .line-div {
        width: 30em;
        max-width: 80%;
        display: inline-block;
    }

    .parent-line-div {
        text-align: center;
        position: relative;
    }

    footer {
        background: #f8f9fa;
    }

    h2 {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 0.1em;
        display: inline-block;
        margin: 10px 0 20px;
    }

    h2 span {
        background: #fff;
        padding: 0 20px;
    }
</style>
