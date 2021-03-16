import React from 'react';

const Users = (props) => {
    const familiar = props.familiar;

    let greetings;
    // if(familiar){
    //     greetings = <p>Welcome, My Friends!</p>;
    // }else{
        
    //     greetings = <p>Who The Hell Are You ?</p>
    // }
    
    greetings = familiar ? <p>Welcome, My Friends. </p> 
    :  
    // eslint-disable-next-line no-use-before-define
    greetings = <p>Who The Hell Are You ?</p>
  
    const greetings1 = familiar ? <p> Hello World !</p> 
    :
    <p> Hacker World! </p>

    // const number = 3;
    // if(number > 5 && familiar === true) {
        // console.log('when i used conditional && sign then chack it my first condition it that true or not? 1st is true chack my second condition otherwise return false>>>');
    // }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {/* <p>Welcome, My Friends!</p> */}
                {/* <p>Who The Hell Are You ?</p> */}
                {greetings}
                {greetings1}
            </div>
            <div>
                <h2>Food Chack-Outs!</h2>
                {
                    
                    familiar ? <p>I'll Buy Food For You!</p>
                    :
                    <p>Let's eat his his & Whose Whose?</p>

                }
                {/* <p>I'll Buy Food For You!</p> */}
                {/* <p>Lets Eat His His WHose WHose?</p> */}
            </div>
            <div>
                <h3>Connection</h3>
                {
                    familiar && <h4>Let's Join My Facebook!</h4>
                }
                {/* <h4>Let's Join My Facebook!</h4> */}
                {/* <h3>Connect On My Social Network</h3> */}
            </div>
        </div>
    );
};

export default Users;