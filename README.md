# This is a pipe and filter pattern
The app.js file indicates how to use the library.  You first instantiate the filters you want in the pipeline.<p> 
    <b>let filter2 = new Filter2();</b><p>
 Once instantiated you then instantiate the pipeline object and register the filters in the pipeline.<p>
     <b>let myPipeLine = new Pipe(msg);
  	 myPipeLine.register(filter1);</b><p>
Call the pipeline object with the message you are going to send through it.  The message can be any format, but the filters must understand the format.  The examples are simple strings.  You can develop a Json message and have different filters work on different parts of the Json document.

## Project structure
To use this project you need to include in your project the IFilter.js, IMsg.js and Pipe.js.
The IFilter.js file defines a class that you will inherit in all of your real filters.  You will have to override the execute method of the IFilter class.
The IMsg is used to put the format of the message.  So if you have a Json message you can just construct the message and then put it into a IMsg object for processing.  

