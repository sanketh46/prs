import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.com.component.html',
  styleUrls: ['./main.com.component.css']
})
export class MainComComponent {

  pap_win(){
    this.t_match=this.t_match+1;
this.h_win=this.h_win+2;
this.m_loss=this.m_loss+1;

this.l_img_url="assets/image/hp.jpeg"
this.r_img_url="assets/image/mr.jpeg"

  }
  pap_loss(){
    this.h_loss=this.h_loss+1;
    this.m_win=this.m_win+2;

this.t_match=this.t_match+1;
this.l_img_url="assets/image/hp.jpeg"
this.r_img_url="assets/image/ms.jpeg"
    
  }
  pap_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;

this.l_img_url="assets/image/hp.jpeg"
this.r_img_url="assets/image/mp.jpeg"
  }
  rock_win(){
    this.h_win=this.h_win+2;
    this.m_loss=this.m_loss+1; 

this.t_match=this.t_match+1;
    this.l_img_url="assets/image/hr.jpeg"
    this.r_img_url="assets/image/ms.jpeg" 
  }
  rock_loss(){
    this.t_match=this.t_match+1;
    this.h_loss=this.h_loss+1;
    this.m_win=this.m_win+2;


    this.l_img_url="assets/image/hr.jpeg"
    this.r_img_url="assets/image/mp.jpeg" 
  }
  rock_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;

    this.l_img_url="assets/image/hr.jpeg"
    this.r_img_url="assets/image/mr.jpeg" 
  }
  sci_win(){
    this.h_win=this.h_win+2;
this.m_loss=this.m_loss+1;

this.t_match=this.t_match+1;
    this.l_img_url="assets/image/hs.jpeg"
    this.r_img_url="assets/image/mp.jpeg" 
  }
  sci_loss(){
    this.t_match=this.t_match+1;
    this.h_loss=this.h_loss+1;
    this.m_win=this.m_win+2;


    this.l_img_url="assets/image/hs.jpeg"
    this.r_img_url="assets/image/mr.jpeg" 
  }
  sci_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;

    this.l_img_url="assets/image/hs.jpeg"
    this.r_img_url="assets/image/ms.jpeg"
  }
  


  start_but:boolean=false;

  start_game(){
this.start_but=true;

  }
user:number=0;
num:number=0;
res:number=0;

t_match:number=0;

h_win:number=0;
h_loss:number=0;
h_draw:number=0;

m_win:number=0;
m_loss:number=0;
m_draw:number=0;

overallwinner:string="";
human_res:string="";
machine_res:string="";




l_img_url:string="assets/image/hp.jpeg";
r_img_url:string="assets/image/mp.jpeg";

  paper(){
    this.num=Math.floor(Math.random()*3)+1;
this.user=10;
this.res=this.user+this.num
this.final_result(this.res)
}
rock(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=20;
  this.res=this.user+this.num  
  this.final_result(this.res)

}
  sci(){
    this.num=Math.floor(Math.random()*3)+1;
    this.user=30;
    this.res=this.user+this.num  
    this.final_result(this.res)

  }
final_result(a:number){
  if(this.t_match<5){
    switch(a){
  

  case 11: alert("Paper Wins");
  this.pap_win();
  break;
  
  case 12: alert("Paper Loss");
  this.pap_loss();
  break; 
  
  case 13: alert(" Draw");
  this.pap_draw();
  break;
  
  case 21: alert("Rock Wins");
  this.rock_win();
  break;
  
  case 22: alert("Rock Loss");
  this.rock_loss();
  break; 
  
  case 23: alert(" Draw");
  this.rock_draw();
  break;
  
  case 31: alert("Scissor Wins");
  this.sci_win();
  break;
  
  case 32: alert("Scissor Loss");
  this.sci_loss();
  break; 
  
  case 33: alert(" Draw");
  this.sci_draw();
  break;
}
}else{
  alert("Match Over")
}
}
}

