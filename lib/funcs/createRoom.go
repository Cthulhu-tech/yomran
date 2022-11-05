package funcs

import (
	"flag"
	"fmt"
	"html"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/guark/guark/app"
	"github.com/jcuga/go-upnp"
)

func CreateRoom(c app.Context) (interface{}, error) {

	port := c.Params.Get("host")

	portStr := port.(string)
	portNumber, _ := strconv.ParseUint(portStr, 10, 64)

	go func() {
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, "WebVideoChat, %q", html.EscapeString(r.URL.Path))
		})

		log.Fatal(http.ListenAndServe(":"+strconv.Itoa(int(portNumber+1)), nil))
	}()

	displayExternalIpPtr := flag.Bool("ip", false, "Display external IP address and exit.")
	useUdpPtr := flag.Bool("udp", false, "Use UDP (instead of TCP) when opening/closing port forward.")
	doClosePtr := flag.Bool("close", false, "Close (as opposed to open) the given port.")
	portPtr := flag.Int("port", int(portNumber+1), "Port to open/close")
	flag.Parse()
	if *displayExternalIpPtr {
		// connect to router
		d, dErr := upnp.Discover()
		if dErr != nil {
			fmt.Printf("Error discovering router: %v\n", dErr)
			os.Exit(1)
		}
		// discover external IP
		ip, ipErr := d.ExternalIP()
		if ipErr != nil {
			fmt.Printf("Error fetching external IP address: %v\n", ipErr)
			os.Exit(1)
		}
		fmt.Println("Your external IP is:", ip)
		return nil, nil
	}
	if *portPtr <= 0 {
		fmt.Printf("Invalid port number, must be > 0.  Got: %d\n", *portPtr)
		os.Exit(1)
	}
	d, dErr := upnp.Discover()
	if dErr != nil {
		fmt.Printf("Error discovering router: %v\n", dErr)
		os.Exit(1)
	}
	var proto string
	if *useUdpPtr {
		proto = "UDP"
	} else {
		proto = "TCP"
	}
	// Open/Close the given port/protocol
	if *doClosePtr {
		fmt.Printf("Closing port forward for %s port %d\n", proto, *portPtr)
		cErr := d.Clear(uint16(*portPtr), proto)
		if cErr != nil {
			fmt.Printf("Error closing port forward: %v\n", cErr)
			os.Exit(1)
		}
	} else {
		fmt.Printf("Opening port forward for %s port %d\n", proto, *portPtr)
		fErr := d.Forward(uint16(*portPtr), "Requested by openup util.", proto)
		if fErr != nil {
			fmt.Printf("Error closing port forward: %v\n", fErr)
			os.Exit(1)
		}
	}

	return nil, nil
}
