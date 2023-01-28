var ToDay = new Date();
var app = new Vue({
    el: "#app",
    data:{
        Message: "",
        Name:"",
        LastN:"",
        User:"",
        Birth:"",
        Users:[],
        Date:[ToDay.getFullYear(),ToDay.getMonth()+1,ToDay.getDate()],
    },
    methods:{
        Save_User(){
            if(this.Invalid_User()){
                this.Users.push({
                    Name: this.Name,
                    LastN: this.LastN,
                    FullName: (this.Name+' '+this.LastN),
                    edad: this.Calc_Age(),
                    Password: this.Generate(),
                    User: this.User,
                })
                this.Message = `${this.Users[0].User}`
            }else{
                this.Message = 'usuario inválido'
            }
        },
        Invalid_User(){
            //del
            console.log(this.Name.toUpperCase() +' - '+ this.User.toUpperCase())
            //
            if(this.Name.toUpperCase() === this.User.toUpperCase()){
                return false
            }
            return true
        },
        Calc_Age(){
            let  = this.Birth.split('-')
            this.Date.map(element => {
                console.log(element)
            })
            return 1
        },
        Generate(){
            return 123
        },
    },
});