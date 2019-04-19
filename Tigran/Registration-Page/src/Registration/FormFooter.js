import React, { Component } from 'react';
import Messages from './../Messages.js';

class FormFooter extends Component {
    render() {
        const {nextFun, previousFun,step,onSubmit,packageInfo} = this.props;
        let buttons;
        switch(step){
            case 1:
                buttons =   <div className="col">
                                <button onClick={nextFun} disabled={!this.props.isNextFunStepThree} className="btn btn-info my-4 btn-block" type="submit">{Messages.formFooter.buttonNext}</button>
                            </div>;

                break;
            case 2 :
                buttons =   <><div className="col">
                                <button onClick={previousFun} className="btn btn-info my-4 btn-block" type="submit">{Messages.formFooter.buttonPrevious}</button>
                            </div>
                            <div className="col">
                                <button onClick={nextFun} disabled={(packageInfo !== "")? false : true} className="btn btn-info my-4 btn-block" type="submit">{Messages.formFooter.buttonNext}</button>
                            </div></>
                break;
            case 3 :
                buttons =   <><div className="col">
                                <button onClick={previousFun} disabled={!this.props.isNextFunStepThree} className="btn btn-info my-4 btn-block" type="submit">{Messages.formFooter.buttonPrevious}</button>
                            </div>
                            <div className="col">
                                <button onClick={onSubmit} className="btn btn-info my-4 btn-block" type="submit">{Messages.formFooter.buttonSubmit}</button>
                            </div></>
                break;    
            default:
                break;
        }
    return (
        <div className="Next row">
            {buttons} 
        </div>
    );
  }
}

export default FormFooter;