<template>
    <div class="container">
        <div class="table">
            <span class="left">
                <span class="top">
                    <img alt="Bone" src="../assets/bone.jpg" style="max-height: 200px;">
                </span>
                <span class="bottom">
                    <img alt="Bone" src="../assets/bone.jpg" style="max-height: 200px;">
                </span>
            </span>
            <span class="right">
              <img alt="Photo" src="../assets/photo.jpg">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .table {
        width: 100%;
        line-height: 100px;
        position: relative;
    }

    .left {
        width: 50%;
        background-color: #CCC;
        display: inline-block;
    }

    .right {
        width: 50%;
        text-align: right;
        /*vertical-align: text-bottom;*/
        display: inline-block;
    }

    .top {
        height: 60%;
        /*position: relative;*/

        display: inline-block;
    }

    .bottom {
        height: 40%;
        /*position: relative;*/
        display: inline-block;
    }
</style>
