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
                    Password: this.Generate(0,0),
                    User: this.User,
                })
                this.Message = `${this.Users[0].User}`
            }else{
                this.Message = 'usuario inválido'
            }
        },
        Invalid_User(){
            if(this.Name.toUpperCase() === this.User.toUpperCase() || 
                (this.Name+' '+this.LastN).toUpperCase() === this.User.toUpperCase()){
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
        Generate(letter, number){
            let aux=0;
            let str="";
            while(str.length<8){
                let rand = Math.floor(Math.random() * 62);
                aux=rand+48
                if(rand>9){
                    aux+=7
                }
                if(rand>35){
                    aux+=6
                }
                //console.log(index+'-'+a+'-'+String.fromCharCode(a))
                if(aux>=48 && aux<58 && number<4){
                    console.log('n-'+number+' - '+str)
                    str+=String.fromCharCode(aux);
                    number++;
                }else if(aux>58 && letter<4){
                    console.log('l-'+letter+' - '+str)
                    str+=String.fromCharCode(aux);
                    letter++;
                }
                console.log(str+' - '+str.length)
                console.log()
            }
            return str;
        },
    },
});