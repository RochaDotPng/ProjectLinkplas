import { forwardRef } from 'react';

// A multi-line field; it shares the Input's look.
const Textarea = forwardRef(function Textarea(props, ref) {
  return <textarea ref={ref} className="lp-input lp-input--textarea" {...props} />;
});

export default Textarea;
