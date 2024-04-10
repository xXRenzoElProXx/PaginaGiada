import React from 'react';

const App2 = () => {
  return (
    <div>
      <form action="https://formsubmit.co/renzocrisanto2021@gmail.com" method="POST">
          <input type="text" name="name" required />
          <input type="email" name="email" required />
          
          <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
          <input type="hidden" name="_subject" value="New submission!"/>
          <input type="hidden" name="_cc" value="another@email.com,yetanother@email.com"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_template" value="box"/>

          <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App2;
