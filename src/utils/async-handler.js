const asyncHandler = () => {
    return (req, res, next) => {
        promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => {

        })
    }
}

export { asuncHandler }