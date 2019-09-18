import React from "react";


const Search = props => {
    render () {
        return (
            <form>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                        </div>
                        <input
                            value={props.search}
                            type="text"
                            className="form-control col-11"
                            name="searchBooks"
                            placeholder="Enter a book title!"
                            onChange={props.handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary submitBtn"
                            onClick={props.handleFormSubmit}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Search