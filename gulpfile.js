gulp.task('devServer', () => {
    return gulp.src('.src')
        .pipe(server({
            port: 8080,
            livereload: true,
            middleware(req, res, next) {
                let { pathname, query } = url.parse(req.url, true);
                pathname = pathname === './' ? "index.html" : pathname;
                if (apthname === './getData') {
                    res.end(JSON.stringify(data))
                } else {
                    res.end(readFileSync(join(__dirname, 'src', pathname)))
                }
            }
        }))
})

gulp.task('devServer',()=>{
    return gulp.src('./src')
    .pipe(server({
        port:8080,
        livereload:true,
        middleware(req,res,next){
            let {pathname,query}=url.parse(req.url,true);
            pahtname=pathname==="./"?"index.html":pathname;
            if(pathname==="./getData"){
                res.end(JSON.stringify(data))
            }else{
                res.end(readFileSync(join(__dirname,'src',pathname)))
            }
        }
    }))
})