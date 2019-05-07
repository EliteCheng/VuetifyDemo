<template>
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span v-if="item.subTitle !== ''">{{ item.subTitle }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from "../../components/core/panel.vue"

export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [
                {
                    title: "长乐盈",
                    subTitle: "180天可质押",
                    rate: "5.80%",
                    text: "近1年历史年化投资回报率",
                }, {
                    title: "建信养老飞益鑫",
                    subTitle: "",
                    rate: "4.57%",
                    text: "近7日年化收益",
                }, {
                    title: "京智0号",
                    subTitle: "大数据赋能",
                    rate: "6.00%",
                    text: "近1月历史年化投资回报率",
                }, {
                    title: "小白基金",
                    subTitle: "超短期",
                    rate: "4.50%",
                    text: "7日年化收益率",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
    @import "../../../css/element.scss";

    .panel {
        @include panel();
        font-family: PingFangSC-Regular, Arial, "Helvetica Neue", Helvetica, sans-serif;
        .content {
            @include flex(row);
            justify-content: space-around;
            box-sizing: border-box;
            &:after {
                content: " ";
                width: 100%;
                display: block;
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                position: relative;
                top: -208px;
            }
            .item {
                position: relative;
                width: 50%;
                box-sizing: border-box;
                padding: 34px 16px;
                &:after {
                    content: " ";
                    width: 1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top: -68px;
                    border-right: 1px solid #eee;
                }
                &:nth-child(2n) {
                    &:after {
                        display: none;
                    }
                }
                dt {
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 42px;
                    color: #333;
                    span {
                        margin-left: 10px;
                        padding: 3px 10px;
                        border: 1px solid #FF515550;
                        color: red;
                        font-size: 20px;
                        line-height: 24px;
                        vertical-align: 1px;
                    }
                }
                dd {
                    &:nth-child(2) {
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #FF5155;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &:nth-child(3) {
                        font-size: 24px;
                        height: 34px;
                        line-height: 34px;
                        color: #999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>
