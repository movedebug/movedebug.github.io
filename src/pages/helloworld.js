const HelloWorld = () => {
    const helloScript = `
    script {
        use Std::Debug;
        fun main(){
            let u:u64 = 1024;
            Debug::print<u64>(&u);
        }
    }
    `
    return (
        <pre>
            {helloScript}
        </pre>
    )
}

export default HelloWorld;