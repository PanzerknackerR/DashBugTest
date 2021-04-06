# DashBugTest
 
Try it yourself:

Install Ionic: 

``` npm install -g @ionic/cli ```

Go inside the first test folder:

``` cd testinonic ```

Then Install Dependencies:

``` npm install ```

After that you launch the app:

``` ionic serve ```


Inside your browser you have to click "HELLO" and show inside the Browser-Console (F12) and wait for the Bug. 

``` Uncaught (in promise) Error: Assertion failed
at assert (bn.js:6)
    at BN.toBuffer (bn.js:529)
    at Signature.push../node_modules/@dashevo/dashcore-lib/lib/crypto/signature.js.Signature.toCompact (signature.js:167)
    at signHash (signer.js:35)
    at sign (signer.js:16)
    at DocumentsBatchTransition.signByPrivateKey (AbstractStateTransition.js:155)
    at DocumentsBatchTransition.sign (AbstractStateTransitionIdentitySigned.js:70)
    at Object.<anonymous> (signStateTransition.ts:22)
    at step (search.ts:23)
    at Object.next (search.ts:23)
    at fulfilled (search.ts:23)
```
  
  
  The Next Test is in Vue:
  
  go inside the testvue folder
  
  You need to have vue installed:
  
  ``` npm install -g @vue/cli ```
  
  You have to install the dependencies:
  
  ``` npm install ```
  
  After that you watch inside the Console of your Browser and wait until the Error occurs.
