import React from 'react';
import Input from '@material-ui/core/Input';

class MaterialForm extends React.Component {
  state = {  }
  render() { 
    return ( 
      <form>
        <Input type="text" required/>
        <button type="submit">Submit</button>
      </form>
     );
  }
}
 
export default MaterialForm;