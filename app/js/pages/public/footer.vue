<template>
    <Panel title="公司信息" :class="$style.panel" class="center">
        <ul :class="$style.content">
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </Panel>
</template>
<script>
import Panel from "../../components/core/panel.vue"

export default {
    name: "Footer",
    components: {
        Panel,
    },
}
</script>
<style lang="scss" module>
    @import "../../../css/element";

    .panel {
        @include panel();
        margin-bottom: 120px;
        > h4 {
            display: none;
        }
        .content {
            background: #f5f5f5;
            > li {
                text-align: center;
                font-size: 24px;
                line-height: 100px;
                color: #999;
                border-top: 1px solid #ddd;
            }
            li:nth-child(n+2) {
            }
        }
    }

</style>
