// const asyncHandler = (fn) => {async () => {}}
// passing fn in a higherorder-fn than it passes further to a async fn
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);

//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         });    
//     }
// }

// --------> Same method as above with promises <---------
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler};