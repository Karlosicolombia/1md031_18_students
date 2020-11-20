
var socket = io();

var vm = new Vue({


  el: '#TheMenu',
  data: {
    arbitraryvariablename : 'BURGERS',
    burgers : food,

    checkBurgers: [],
    orderButtonIsClicked: false,
    orders: {},
    coordinates: {x: -20, y: -20},
    orderId: "",
    count: 0,

    Gender: "",
    Payment: "",
    Email: "",
    Fullname: "",
    order: "",




  //  burgers: [new MenuItem("COW-BURGER",100,"MEAT",true,false), new MenuItem("LEAF-BURGER",9001,"VEG",false,true), new MenuItem("HYBRID-BURGER",500,"HYBRID",true,false)],
},
methods:{
  check: function(event){
    console.log(this.checkBurgers)
  },

 addOrder: function(event){

    this.orderButtonIsClicked = true

    this.customerInfo = []
    this.customerInfo.push({value: " Fullname: " + this.Fullname})
    this.customerInfo.push({value: " Email: " + this.Email})
    this.customerInfo.push({value: " Gender: " + this.Gender})
    this.customerInfo.push({value: " Payment Method: " + this.Payment})
    this.customerInfo.push({value: " Order: " + this.checkBurgers})

  socket.emit("addOrder", { orderId: this.count++,
                                    details: { x: this.coordinates.x,
                                               y: this.coordinates.y},
                                    orderItems: this.checkBurgers,
                                    customerInfo: [" Fullname: " + this.Fullname, " Email: " + this.Email, " Payment Method: " + this.Payment, " Gender: " + this.Gender ]

                                  });
                                  return

},

displayOrder: function(event){
  let offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,}
                this.coordinates = {
                  x: event.clientX - 10 - offset.x,
                  y: event.clientY - 10 - offset.y,}

}}

})
