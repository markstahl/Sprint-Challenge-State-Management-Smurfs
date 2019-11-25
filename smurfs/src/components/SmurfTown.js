import React, { useEffect } from "react";
import SmurfTile from "./SmurfTile";
import { connect } from "react-redux";
import { getSmurfInfo } from "../actions";

const SmurfTown = (props) => {

    useEffect(() => {
        props.getSmurfInfo()
    }, [])

    return (
        <div>
            {props.smurfs.map(smurf => {
                return <SmurfTile smurf={smurf} key={smurf.id} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfInfo })(SmurfTown)