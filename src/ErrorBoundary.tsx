import React from "react";

class ErrorBoundary extends React.Component<errorBoundaryProps,
errorBoundarState>
{
    constructor(props:errorBoundaryProps){
        super(props);
        this.state = {hasError:false,message:''}
    }
    static getDerivedStateFromError(error:any){
        return {hasError:true,message:error}
    }
    componentDidCatch(error:any,errorInfo:any){
        console.log(error);
    }
    render(){
        if(this.state.hasError){
            if(this.props.errorUi){
                return this.props.errorUi;
            }else{
                return <h3>{this.state.message}</h3>
            }
        }else{
            return this.props.children;
        }
    }
}
export default ErrorBoundary;
interface errorBoundaryProps{
    errorUi?:React.ReactNode
}

interface errorBoundarState{
    hasError:boolean;
    message:string;
}