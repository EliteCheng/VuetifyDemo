<template>
    <v-app>
        <v-content :class="$style.content">
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>后台管理系统</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-text-field prepend-icon="person" v-model="username" label="用户名"
                                                  :counter="16" type="text" required :rules="nameRules"/>
                                    <v-text-field prepend-icon="email" v-model="email"
                                                  :rules="emailRules" label="邮箱" required/>
                                    <v-text-field
                                        prepend-icon="lock" label="密码" :counter="16"
                                        v-model="password" :rules="passwordRules"
                                        @click:append="() => (e1 = !e1)"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :type="e1 ? 'text' : 'password'" required/>
                                    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                                                label="Do you agree?" required/>
                                    <v-btn color="success" :disabled="!valid" @click="validate">登录</v-btn>
                                    <v-btn color="error" @click="reset">重置</v-btn>
                                    <v-btn color="warning" @click="resetValidation">重新提交</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        passwordRules: [
            v => !!v || '密码必填',
            v => {
                let str = '密码必须在[6-16]个字符之间';
                if (v && v.length <= 16 && v.length >= 6) {
                    str = true;
                }
                return str;
            }
        ],
        nameRules: [
            v => !!v || '用户名必填',
            v => (v && v.length <= 16 && v.length >= 6) || '用户名必须在[6-16]个字符之间'
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        valid: false,
        checkbox: false,
        username: "",
        email: '',
        password: "",
        e1: false,
    }),
    mounted() {
        this.valid = false
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
                console.log(this.username + " ... " + this.password);
                this.$router.push("/");
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    }
}
</script>
<style lang="css" module>
    .content {
        padding: 0 !important;
    }
</style>
