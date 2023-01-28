var ToDay = new Date();
var app = new Vue({
    el: "#app",
    data:{
        Message: "",
        Name: "",
        LastN: "",
        User: "",
        Birth: "",
        Users: [],
        Date: [ToDay.getFullYear(),ToDay.getMonth()+1,ToDay.getDate()],
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
            //console.log(this.Name.toUpperCase() +' - '+ this.User.toUpperCase())
            //
            if(this.Name.toUpperCase() === this.User.toUpperCase()){
                return false
            }
            return true
        },
        Calc_Age(){
            let birth = this.Birth.split('-');
            let age = 0;

            birth[0]=Number(birth[0])
            birth[1]=Number(birth[1])
            birth[2]=Number(birth[2])

            age = this.Date[0]-birth[0];
            console.log(this.Date[0]+'-'+birth[0]+' '+(this.Date[0]-birth[0]))
            console.log(this.Date[1]+'-'+birth[1]+' '+(this.Date[1]-birth[1]))
            console.log(this.Date[2]+'-'+birth[2]+' '+(this.Date[2]-birth[2]))
            if(this.Date[1]<birth[1] || (this.Date[1]==birth[1] && this.Date[2]<birth[2])){
                console.log('-'+age-1)
                age--;
            }
            return age
        },
        Generate(){
            return 123
        },
    },
});