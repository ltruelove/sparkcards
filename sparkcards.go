package main

import (
	//"bytes"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {

	fs := http.Dir(".")
	fileHandler := http.FileServer(fs)

	// setup routes
	router := mux.NewRouter()

	router.PathPrefix("/").Handler(fileHandler)
	http.Handle("/", router)

	// this call blocks -- the progam runs here forever
	err := http.ListenAndServe(":8086", nil)
	fmt.Println(err.Error())
}
