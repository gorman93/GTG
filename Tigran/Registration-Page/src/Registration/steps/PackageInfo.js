import React, { Component } from 'react';



class PackageInfo extends Component {
	render() {
    	const {packageInfo, packageInfoSave} = this.props;
	    return (
	      <div className="PackageInfo">
	            <div className="custom-control custom-radio">
					<input type="radio" className="custom-control-input" onClick={packageInfoSave} id="radio1" value="standart" name="groupOfRadios" defaultChecked={(packageInfo === "standart") && "true" }/>
					<label className="custom-control-label" htmlFor="radio1">Standart</label>
				</div>
				<div className="custom-control custom-radio">
					<input type="radio" className="custom-control-input" onClick={packageInfoSave} id="radio2" value="premium" name="groupOfRadios" defaultChecked={(packageInfo === "premium") && "true"}/>
					<label className="custom-control-label" htmlFor="radio2">Premium</label>
				</div>
	      </div>
	    );
  	}
}

export default PackageInfo;
