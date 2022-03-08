docker run --rm ^
    -v %CD%/mount/iexec_in:/iexec_in ^
    -v %CD%/mount/iexec_out:/iexec_out ^
    -e IEXEC_IN=/iexec_in ^
    -e IEXEC_OUT=/iexec_out ^
    iexec-simple-app 41.90 12.49