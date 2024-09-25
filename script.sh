#!/bin/bash

# Installera SSH
sudo apt update
sudo apt install -y openssh-server

# Aktivera IP forwarding på ens5
sudo sysctl -w net.ipv4.ip_forward=1

# Ställ in statisk IP på ens5 och DHCP på ens4
# Ersätt IP_ADDRESS med den önskade statiska IP-adressen för ens5 och DHCP_RANGE med det önskade DHCP-området för ens4
sudo ip addr add IP_ADDRESS dev ens5
sudo ip link set dev ens5 up
sudo ip addr flush dev ens4
sudo dhclient ens4

# Installera och konfigurera DHCP-server
sudo apt install -y isc-dhcp-server

# Ändra DHCP-serverkonfigurationen för att använda ens5
sudo sed -i 's/INTERFACESv4=""/INTERFACESv4="ens5"/' /etc/default/isc-dhcp-server

# Konfigurera DHCP-servern
sudo cp /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.bak  # Säkerhetskopiera konfigurationsfilen
sudo tee -a /etc/dhcp/dhcpd.conf > /dev/null <<EOF
subnet ens4 netmask <NETMASK> {
  range <DHCP_RANGE_START> <DHCP_RANGE_END>;
}
EOF

sudo systemctl restart isc-dhcp-server

# Installera och konfigurera Nftables
sudo apt install -y nftables
# Skapa och applicera Nftables-regler
sudo tee /etc/nftables.conf > /dev/null <<EOF
#!/usr/sbin/nft -f

flush ruleset

table inet filter {
    chain input {
        type filter hook input priority 0; policy accept;
        tcp dport 22 accept
    }

    chain forward {
        type filter hook forward priority 0; policy accept;
    }

    chain output {
        type filter hook output priority 0; policy accept;
    }
}

table inet nat {
    chain prerouting {
        type nat hook prerouting priority 0; policy accept;
    }

    chain postrouting {
        type nat hook postrouting priority 100; policy accept;
        oif ens4 masquerade
    }
}
EOF

sudo systemctl restart nftables

echo "Installation och konfiguration av nätverkskomponenter är klar."
