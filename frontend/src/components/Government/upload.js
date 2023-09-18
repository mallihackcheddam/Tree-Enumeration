import React from 'react'
import Govtnavbar from './govtnavbar'
import './upload.css'

export default function upload() {
    return (
        <div>
            <Govtnavbar />
            <div classname="uploadFile">
                <label for="formFile" class="form-label">Upload the Land Image</label>
                <input class="form-control" id="formFile" type="file" />
            </div>
            <div className="results">
                <h1>Results</h1>
            </div>
        </div>
    )
}
