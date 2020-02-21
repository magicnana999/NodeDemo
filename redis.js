let redis = require("redis");
const redis_client = redis.createClient({host:'47.99.173.26',port:'11002',ttl:5*60*1000});

redis_client.auth('**^^*(*%$jdfh~#%&',function(){
    console.log('redis succress');
});
redis_client.on("error",function(err){
    console.log(err);

});
redis = {};
redis.set = function(key,value){
    value = JSON.stringify(value);
    return redis_client.set(key,value,function(err){
        //console.log(err);
    });
};
text = async(key)=>{
    doc = await new Promise((resolve)=>{
        redis_client.get(key,function(err,res){
            return resolve(res);
        });
    });
    doc = JSON.parse(doc);
    return doc;
}

redis.get = async(key)=>{
    const ret  = await text(key);
    return ret;
}

module.exports = redis;
