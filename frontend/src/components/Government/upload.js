import React from 'react'
import Govtnavbar from './govtnavbar'
import './upload.css'
import MapLocate from './mapLocate'

export default function upload() {
    return (
        <div classname="govtupload">
            <Govtnavbar />
            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile"/>
            </div>
            <div className="results">
                <h1>Results</h1>
            </div>
        </div>
    )
}
