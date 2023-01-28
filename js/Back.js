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
        Date: [ToDay.getFullYear(),ToDay.getMonth()+1,ToDay.getDate()],//calculo la fecha actual
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
                (this.Name+' '+this.LastN).toUpperCase() === this.User.toUpperCase()){//aquí pregunto si el nombre y el nombre completo del usuario son iguales al nombre de usuario son iguale
                return false;//si son iguales retorno un false como advertencia que no pasó la prueba
            }
            return true;
        },
        Calc_Age(){
            let birth = this.Birth.split('-');//creo un arreglo separando los días, meses y años
            let age = 0;

            birth[0]=Number(birth[0])//se convierten a enteros para mejorar el manejo
            birth[1]=Number(birth[1])
            birth[2]=Number(birth[2])

            age = this.Date[0]-birth[0];//geenro la edad que tendría al persona en el año actual
            if(this.Date[1]<birth[1] || (this.Date[1]==birth[1] && this.Date[2]<birth[2])){
                //esta condición simplemente es apra saber si en el año actual ya cumplió años
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
                /*Aquí genero 62 números diferentes que es la cantidad total entre
                  los números (10), las letras minúsculas (26) y las mayúsculas (26)
                */
                aux=rand+48//sumo 48 por que es donde inician los números en la tabla ASCII
                if(rand>9){
                    aux+=7
                    /*si ya pasó de los 10 número le sumo 7 para llegar al 65 que es 
                      donde empiezan las letras en mayúsculas
                    */
                }
                if(rand>35){
                    aux+=6
                    /*si ya pasó de las letras en mayúsculas tendréq ue empezar con las 
                      letras en minúsculas que inician en el 97, por ello sumo 6
                    */
                }
                if(aux>=48 && aux<58 && number<4){
                    str+=String.fromCharCode(aux);//con este comando convierto el número generado en un chart
                    number++;
                }else if(aux>58 && letter<4){
                    str+=String.fromCharCode(aux);
                    letter++;
                }
            }
            return str;
        },
    },
});