<p align="center"><img src="public/brand/quantum-safe-logo-horizontal.svg" width="460" alt="Quantum Safe" /></p>

# Quantum Safe (`$QSAFE`)

**Post-Quantum SHA-256 Self-Custody Protocol on Solana (RFC 8554 LM-OTS).**

[Security policy](SECURITY.md) · [Protocol specification](docs/PROTOCOL.md) · [Cryptography](docs/CRYPTOGRAPHY.md) · [Architecture](docs/ARCHITECTURE.md)

Assets go into a program-derived **Quantum Safe** vault from any Solana hot wallet. They come out **only** with a 1,124-byte 34-chain SHA-256 one-time signature (RFC 8554 Leighton-Micali One-Time Signature) from a key your hot wallet never holds. A stolen seed phrase or a malicious signature given to a drainer site cannot authorize a withdrawal. One air-gapped recovery kit, kept offline, rotates lost or exposed keys and cancels any waiting withdrawal.

---

## Key Architecture

- **Hot Wallet Key (Ed25519):** Pays network fees and deposits SOL/SPL tokens into the vault. Has **zero** authority to withdraw from the vault.
- **LM-OTS Day Key (34-Chain SHA-256):** Announces withdrawals with a 1,124-byte one-time hash signature. Every withdrawal consumes the current key and commits to the next generation on-chain.
- **Offline Recovery Kit (`scrypt` + `AES-256-GCM`):** Generated and opened exclusively inside a standalone offline HTML tool whose Content-Security-Policy blocks all network connections. Rotates lost or compromised Day Keys and cancels pending withdrawals.
- **Trusted Cold Wallets & 24h Timelock Airlock:** Up to 4 hardware wallet addresses can be registered at vault creation for instant withdrawals. Withdrawals to any other destination enter a configurable timelock (default 24 hours) and can be cancelled immediately with your Stop File.

---

## Quick Start (Web Application)

Requires **Node 22 LTS** and npm:

```sh
npm ci
npm run dev
```

Open `http://localhost:5173`.

---

## Build & Verify Protocol Artifacts

```sh
npm run typecheck
npm run tool:build        # Builds standalone offline recovery tool (public/source/qsafe-recovery-tool.html)
npm run cli:build         # Builds single-file Node 22 CLI (public/source/qsafe-cli.mjs)
npm run extension:build   # Builds Quantum Safe Watch extension (public/source/qsafe-watch.zip)
```

---

## Standalone CLI (`qsafe-cli.mjs`)

[`tools/cli/qsafe.ts`](tools/cli/qsafe.ts) lets you inspect a Quantum Safe, initiate or complete withdrawals, release timelocked transfers, and submit recovery packets directly against any Solana RPC node without using the web interface:

```sh
node public/source/qsafe-cli.mjs help
```

---

## License

MIT License. See [LICENSE](LICENSE) and [THIRD_PARTY.md](THIRD_PARTY.md).
