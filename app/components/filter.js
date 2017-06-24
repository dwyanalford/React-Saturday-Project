import React from "react";

const Filter = () => (
	<filter className="col-lg-6">
    	<div className="input-group">
      		<input type="text" className="form-control" placeholder="Search for...">
      		<span className="input-group-btn">
        	<button className="btn btn-default" type="button">Go!</button>
      		</span>
    	</div>
	</filter>
);

export default Filter;
