import React, {Component} from 'react'
import { Link } from 'react-router'

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            offsetTops:[],
            curSection: 0,
        }
        // this.curSection = 0
        this.moving = false
        this.handleScroll = this.handleScroll.bind(this)
        this.handleScroll1 = this.handleScroll1.bind(this)
        this.setScreenHeight = this.setScreenHeight.bind(this)
        this.pageHeight = 0;
        console.log("here")
    }
    componentDidMount(){
        console.log("mounted")
        this.beforeScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        this.moving = true
        this.changeSlide(0)
        this.setScreenHeight()
        document.addEventListener('scroll',this.handleScroll1)
    }
    componentWillUnmount(){
        document.removeEventListener('scroll',this.handleScroll1)
    }
    setScreenHeight(){
        this.pageHeight = window.innerHeight-60;
        for(let i=0,l=this.props.children.length;i<l;i++){
            let el = document.getElementById(this.props.children[i].props.id)
            console.log(el)
            if(el){
                el.style.height =  this.pageHeight + "px"
                console.log(window.innerHeight)
            }
        }
    }
    handleScroll1(e){//改变侧边控制按钮
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            curSection = Math.floor(scrollTop/this.pageHeight);
        if(this.state.curSection !== curSection){
            this.setState({curSection})
        }
    }
    handleScroll(e){
        let self = this
        if(!this.moving){
            window.requestAnimationFrame(function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                if(scrollTop-self.beforeScrollTop>0 && self.state.curSection<self.props.children.length-1){
                    self.changeSlide(self.state.curSection+1)
                    self.moving = true
                }else if(scrollTop-self.beforeScrollTop<0&&self.state.curSection>0){
                    self.changeSlide(self.state.curSection-1)
                    self.moving = true
                }
                self.beforeScrollTop = scrollTop
            })
        }
    }
    getElementTop(ele){
        ele = document.getElementById(ele.props.id)
        let actualTop = ele.offsetTop
        let current = ele.offsetParent
        while (current!=null) {
            actualTop+=current.offsetTop
            current = current.offsetParent
        }
        return actualTop
    }
    changeSlide(index){
        let ele = document.getElementById(this.props.children[index].props.id)
        Velocity(ele,"scroll",{duration:1000,offset:-60,complete:()=>{
            this.moving = false
            this.beforeScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            this.setState({curSection:index})
        }})
    }
    handleTab(index){
        this.moving = true
        this.changeSlide(index)
    }
    render(){
        return (
          <div className="">
            <div className="carousel">
            {this.props.children.map((item,index)=>(
                <div key={index} className={"item"+(this.state.curSection===index?" active":"")} onClick={this.handleTab.bind(this,index)}>
                    {this.state.curSection===index?"":<img src={require("../../images/about/Oval.png")} />}
                </div>
            ))}
            </div>
            {this.props.children}
          </div>
        )
    }
}

export default Carousel
