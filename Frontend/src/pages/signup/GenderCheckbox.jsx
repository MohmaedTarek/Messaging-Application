
const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="cursor-pointer label  mr-2">
                    <span className="label-text mr-2">Male</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text  mr-2">Female</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
            </div>

        </div>
    )
}

export default GenderCheckbox
