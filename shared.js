<!-- LIBRARY & CSS -->
<link rel="icon" type="image/png" href="https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_dppi_512.png">
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    :root { --gold-primary: #D4AF37; --gold-light: #FFD700; --gold-glow: rgba(255, 215, 0, 0.4); --blue-royal: #1e3a8a; --blue-neon: #3b82f6; }
    body { font-family: 'Outfit', sans-serif; background-color: #050505; color: #f8fafc; margin: 0; min-height: 100vh; overflow-x: hidden; }
    .ambient-light { position: fixed; border-radius: 50%; filter: blur(80px); z-index: -2; opacity: 0.5; animation: pulse-light 8s infinite alternate ease-in-out; }
    .light-gold { top: -10%; left: -10%; width: 60vw; height: 60vw; background: radial-gradient(circle, var(--gold-primary), transparent 70%); }
    .light-blue { bottom: -10%; right: -10%; width: 50vw; height: 50vw; background: radial-gradient(circle, var(--blue-royal), transparent 70%); animation-delay: -4s; }
    @keyframes pulse-light { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(1.1); opacity: 0.6; } }
    .os-window { background: rgba(20, 25, 40, 0.6); backdrop-filter: blur(30px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.1); border-top: 1px solid rgba(255, 255, 255, 0.3); border-left: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.05); transform-style: preserve-3d; transform: translateZ(0); transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .os-input, .os-select { background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); color: white; transition: 0.3s; box-shadow: inset 0 2px 5px rgba(0,0,0,0.5); }
    .os-input:focus, .os-select:focus { border-color: var(--gold-light); box-shadow: 0 0 15px var(--gold-glow), inset 0 2px 5px rgba(0,0,0,0.5); outline: none; background: rgba(0, 0, 0, 0.7); }
    .os-input:disabled, .os-select:disabled { opacity: 0.5; cursor: not-allowed; background: rgba(0,0,0,0.6); }
    .btn-gold { background: linear-gradient(135deg, #b45309 0%, #D4AF37 50%, #FFD700 100%); color: #000; font-weight: 800; border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.4); transition: transform 0.1s ease, box-shadow 0.2s ease; }
    .btn-gold:active { transform: scale(0.98); } .btn-gold:disabled { opacity: 0.7; cursor: not-allowed; filter: grayscale(0.5); }
    .btn-green { background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: #fff; font-weight: 800; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3); transition: transform 0.1s ease; }
    .btn-green:active { transform: scale(0.98); } .btn-green:disabled { opacity: 0.7; cursor: not-allowed; filter: grayscale(0.5); }
    .btn-red { background: linear-gradient(135deg, #991b1b 0%, #ef4444 100%); color: #fff; font-weight: 800; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3); transition: transform 0.1s ease; }
    .btn-red:active { transform: scale(0.98); } .btn-red:disabled { opacity: 0.7; cursor: not-allowed; filter: grayscale(0.5); }
    .btn-admin-logout { background: linear-gradient(180deg, #1a1a1a 0%, #000000 100%); border: 1px solid #7f1d1d; color: #ef4444; text-transform: uppercase; letter-spacing: 0.1em; box-shadow: 0 4px 15px rgba(0,0,0,0.5); transition: all 0.3s ease; }
    .btn-admin-logout:hover { background: linear-gradient(180deg, #7f1d1d 0%, #450a0a 100%); color: white; border-color: #ef4444; box-shadow: 0 0 20px rgba(220, 38, 38, 0.4); }
    .text-gold-gradient { background: linear-gradient(to right, #F3E5AB, #FFD700, #D4AF37); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.5)); }
    .loader { border: 3px solid rgba(255,255,255,0.1); border-top: 3px solid #FFD700; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite; box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .animate-in { animation: fadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
    .custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 10px; } .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: var(--gold-primary); }
    .lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 9999; display: flex; justify-content: center; align-items: center; animation: fadeIn 0.3s; flex-direction: column; backdrop-filter: blur(10px); }
    .lightbox-content { position: relative; max-width: 90%; max-height: 80vh; display: flex; justify-content: center; align-items: center; width: 100%; }
    .lightbox-img { max-width: 100%; max-height: 80vh; border: 2px solid var(--gold-primary); box-shadow: 0 0 50px rgba(212, 175, 55, 0.5); border-radius: 10px; }
    .lightbox-badge { position: absolute; bottom: -15px; right: -10px; padding: 5px 15px; border-radius: 999px; font-size: 14px; z-index: 10001; box-shadow: 0 5px 15px rgba(0,0,0,0.5); background: #D4AF37; color: black; font-weight: bold; border: 1px solid white; }
    .lightbox-close { position: absolute; top: 20px; right: 20px; color: white; font-size: 2rem; cursor: pointer; z-index: 10002; background: rgba(255,255,255,0.1); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.2); }
    .badge-base { font-weight:800; text-transform:uppercase; letter-spacing:0.05em; border:1px solid rgba(255,255,255,0.3); }
    .badge-kota { background:linear-gradient(135deg, #00C851, #007E33); color:white; }
    .badge-provinsi { background:linear-gradient(135deg, #33b5e5, #0099CC); color:white; }
    .badge-nasional { background:linear-gradient(135deg, #ff4444, #CC0000); color:white; }
    .badge-gold { background:linear-gradient(135deg, #FFD700, #B8860B); color:black; border-color:#FFFACD; }

    /* Biometric Animations (Dari HNP) */
        .biometric-scanner-overlay {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(0,0,0,0.92); backdrop-filter: blur(10px);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .bio-icon-container { position: relative; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .fingerprint-icon { font-size: 60px; color: rgba(255, 215, 0, 0.2); }
        .fingerprint-active {
            position: absolute; inset: 0;
            color: #D4AF37; overflow: hidden;
            animation: bioScan 1.5s ease-in-out infinite;
            display: flex; align-items: center; justify-content: center;
            clip-path: inset(100% 0 0 0);
        }
        .fingerprint-active i { font-size: 60px; filter: drop-shadow(0 0 10px #D4AF37); }
        @keyframes bioScan {
            0% { clip-path: inset(100% 0 0 0); }
            50% { clip-path: inset(0 0 0 0); }
            100% { clip-path: inset(0 0 100% 0); }
        }
        .face-id-frame {
            width: 120px; height: 120px; border-radius: 20px;
            border: 2px solid rgba(255,255,255,0.1); position: relative;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 0 20px rgba(212,175,55,0.2);
        }
        .face-id-scanner {
            width: 100%; height: 2px; background: #D4AF37;
            box-shadow: 0 0 15px #D4AF37; position: absolute; top: 10px;
            animation: faceScan 1.5s ease-in-out infinite alternate;
        }
        @keyframes faceScan { from { top: 10%; opacity: 0.5; } to { top: 90%; opacity: 1; } }
</style>

<script type="text/babel">
    const { useState, useEffect } = React;
    const LOGO_DPPI = "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo_DPPI.png";
    const LOGO_YOGYA = "https://upload.wikimedia.org/wikipedia/commons/d/db/Logo_Pemkot_Yk.png"; 
    const LOGO_PASKIB = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo_paskibraka.png";

    // --- KONFIGURASI API GITHUB PAGES ---
    // PENTING: Ganti URL di bawah ini dengan URL hasil Deploy "Web App" dari Google Apps Script Anda!
    const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzj-eM_iDqH0jKCbwsy80w5ub-z3iY4lvlNVAN39lSpwHeGK5ZwSuNFguVaEcDIOdJx/exec"; // CONTOH, GANTI DENGAN MILIK ANDA

    // --- API BRIDGE (DIPERBARUI UNTUK FETCH) ---
    const api = {
        run: async (funcName, payload = {}) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await fetch(GAS_WEB_APP_URL, {
                        method: "POST",
                        redirect: "follow",
                        // Menggunakan text/plain agar tidak terkena error CORS Preflight di browser
                        headers: {
                            "Content-Type": "text/plain;charset=utf-8",
                        },
                        body: JSON.stringify({
                            action: funcName,
                            payload: payload
                        })
                    });

                    const result = await response.json();
                    
                    if (result.status === 'success' || result.status === 'error') {
                        // GAS merespon dengan format JSON kita
                        if(result.status === 'error') {
                            reject(result.message);
                        } else {
                            // Untuk fungsi yang mengembalikan 'data', kembalikan data-nya (seperti getEvaluasiByDate)
                            // Untuk fungsi yang hanya mengembalikan status dan message (seperti addEvaluation), kembalikan seluruh object result
                            resolve(result.data !== undefined ? result.data : result);
                        }
                    } else {
                        // Fallback jika response bukan format baku kita
                        resolve(result);
                    }
                } catch (error) {
                    console.error("API Error:", error);
                    reject("Gagal terhubung ke server database.");
                }
            });
        }
    };

    // Fungsi get khusus (Opsional jika ingin menggunakan GET request)
    api.get = async (funcName, params = {}) => {
        try {
            const queryParams = new URLSearchParams({ action: funcName, ...params }).toString();
            const response = await fetch(`${GAS_WEB_APP_URL}?${queryParams}`);
            const result = await response.json();
            if (result.status === 'success') return result.data;
            throw new Error(result.message);
        } catch (error) {
            console.error("API GET Error:", error);
            throw error;
        }
    }

    // --- SHARED HELPER FUNCTIONS ---
    const getBadgeClass = (penugasan) => {
        if (!penugasan) return 'badge-kota'; 
        const p = penugasan.toLowerCase();
        if (p.includes('provinsi')) return 'badge-provinsi';
        if (p.includes('nasional')) return 'badge-nasional';
        return 'badge-kota'; 
    };

    // --- SHARED COMPONENTS ---
    function Background3D() {
        return (
            <>
                <div className="ambient-light light-gold"></div>
                <div className="ambient-light light-blue"></div>
            </>
        );
    }

    function StarRating({ count, size = "text-xs" }) {
        const numCount = parseInt(count) || 0;
        if (numCount < 0) {
            return (
                <div className={`flex items-center gap-1 ${size} text-red-500 font-bold`}>
                    <i className="fas fa-minus-circle"></i>
                    <span>{Math.abs(numCount)} BINTANG</span>
                </div>
            );
        }
        const starCount = Math.max(0, Math.min(5, numCount));
        return (
            <div className={`flex gap-0.5 ${size} text-[#FFD700]`}>
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={`${i < starCount ? "fas" : "far"} fa-star drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]`}></i>
                ))}
            </div>
        );
    }

    function MediaModal({ src, badgeText, badgeClass, onClose }) {
        if (!src) return null;
        const isDataVideo = src.startsWith("data:video/");
        const isVideoExt = src.toLowerCase().match(/\.(mp4|webm|ogg|mov)(\?|$)/i);
        const isVideo = isDataVideo || isVideoExt;

        return (
            <div className="lightbox-overlay" onClick={onClose}>
                <div className="lightbox-close" onClick={onClose}><i className="fas fa-times"></i></div>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    {isVideo ? (
                        <video controls autoPlay playsInline className="lightbox-img bg-black" style={{ width: '100%', maxHeight: '80vh' }}>
                            <source src={src} />
                            Browser Anda tidak mendukung tag video.
                        </video>
                    ) : (
                        <img src={src} className="lightbox-img" />
                    )}
                    {badgeText && <div className={`lightbox-badge badge-base ${badgeClass}`}>{badgeText}</div>}
                </div>
            </div>
        );
    }

    function PasswordDisplay({ password }) {
        const [show, setShow] = useState(false);
        return (
            <div className="flex justify-between items-center w-full">
                <span className={show ? "font-mono font-bold text-white drop-shadow-md" : "font-mono font-bold text-slate-500"}>
                    {show ? password : "••••••••"}
                </span>
                <button onClick={() => setShow(!show)} className="text-xs text-gold-primary hover:text-white transition drop-shadow-md">
                    <i className={`fas ${show ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
            </div>
        );
    }

    function StatusBadge({ status }) {
        let colorClass = 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        if (status === 'Active') colorClass = 'bg-green-500/20 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.2)]';
        else if (status === 'Pending') colorClass = 'bg-orange-500/20 text-orange-400 border-orange-500/30';
        else if (status === 'Blocked' || status === 'Non-Active') colorClass = 'bg-red-500/20 text-red-400 border-red-500/30';
        return <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${colorClass}`}>{status}</span>;
    }

    function FullProfileCard({ user, type }) {
        const isPaskib = type === 'paskibraka';
        const badgeClass = isPaskib ? getBadgeClass(user.penugasan) : 'badge-gold';
        return (
            <div className="space-y-3 text-sm animate-in">
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg backdrop-blur-sm">
                    <div className="bg-white/5 p-2 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">DATA UTAMA</div>
                    <div className="p-4 space-y-3">
                        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Peran</span><span className="font-bold text-gold-primary uppercase drop-shadow">{type}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">{isPaskib ? 'NIK' : 'Username'}</span><span className="font-bold text-white drop-shadow">{isPaskib ? user.nik : user.username}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Nama Lengkap</span><span className="font-bold text-white text-right drop-shadow">{user.nama}</span></div>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Nama Lapangan</span><span className="font-bold text-gold-gradient">{user.lapangan}</span></div>
                        <div className="flex justify-between items-center"><span className="text-slate-400">Status Akun</span><StatusBadge status={user.status} /></div>
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg backdrop-blur-sm">
                    <div className="bg-white/5 p-2 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">DETAIL & KEAMANAN</div>
                    <div className="p-4 space-y-3">
                        {isPaskib ? (
                            <><div className="flex justify-between border-b border-white/5 pb-2"><span className="text-slate-400">Asal Sekolah</span><span className="font-bold text-white text-right drop-shadow">{user.sekolah}</span></div><div className="flex justify-between items-center border-b border-white/5 pb-2"><span className="text-slate-400">Penugasan</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass} badge-base`}>{user.penugasan}</span></div></>
                        ) : (
                            <div className="flex justify-between items-center border-b border-white/5 pb-2"><span className="text-slate-400">Jabatan</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass} badge-base`}>{user.jabatan}</span></div>
                        )}
                        <div className="flex flex-col gap-1"><span className="text-slate-400 text-xs">Password</span><div className="bg-black/30 p-2 rounded border border-white/5 inner-shadow"><PasswordDisplay password={user.password} /></div></div>
                    </div>
                </div>
            </div>
        );
    }
// --- FORM EVALUASI PELATIHAN (VERSI FIX) ---
    function TrainingFeedbackForm({ user, role, onBack }) {
        // Default tanggal hari ini
        const today = new Date().toISOString().split('T')[0];
        const [form, setForm] = useState({ aspect: 'Umum', rating: 5, content: '', date: today });
        const [loading, setLoading] = useState(false);
        const ASPECTS = ['Umum', 'Materi Latihan', 'Fisik & Stamina', 'Kedisiplinan', 'Konsumsi/Logistik', 'Sarana Prasarana'];

        const handleSubmit = () => {
            if (!form.content) return alert("Mohon isi detail masukan/evaluasi.");
            setLoading(true);
            const now = new Date();
            const payload = {
                role: role === 'paskibraka' ? 'Paskibraka' : 'Pelatih',
                senderName: user.nama,
                date: form.date, 
                time: now.toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'}),
                aspect: form.aspect,
                rating: form.rating,
                content: form.content
            };
            api.run('addTrainingFeedback', payload).then(res => {
                setLoading(false);
                // Karena api.run meresolve dengan payload res jika res.status === 'success'
                alert(res.message || "Berhasil dikirim!");
                onBack();
            }).catch(e => { 
                setLoading(false); 
                alert("Gagal: " + e); 
            });
        };

        return (
            <div className="os-window p-0 rounded-[2rem] h-[85vh] flex flex-col overflow-hidden animate-in">
                <div className="p-6 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl z-10 flex-none text-center">
                    <h3 className="font-black text-white uppercase tracking-tight text-lg">EVALUASI PELATIHAN</h3>
                    <p className="text-[10px] text-slate-400">Feedback harian untuk kemajuan bersama</p>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
                    {/* Input Tanggal Manual (Opsional, default hari ini) */}
                    <div>
                         <label className="block text-slate-400 text-xs font-bold mb-2">Tanggal Latihan</label>
                         <input type="date" className="w-full p-2 os-input rounded-xl text-sm" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
                    </div>

                    <div>
                        <label className="block text-slate-400 text-xs font-bold mb-2">Aspek Evaluasi</label>
                        <div className="grid grid-cols-2 gap-2">
                            {ASPECTS.map(a => (<button key={a} onClick={() => setForm({...form, aspect: a})} className={`py-2 px-1 rounded-lg text-[10px] font-bold border transition ${form.aspect === a ? 'bg-[#FFD700] text-black border-[#FFD700]' : 'bg-white/5 border-white/10 text-slate-400'}`}>{a}</button>))}
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                        <label className="block text-slate-400 text-xs font-bold mb-3">Rating Pelaksanaan</label>
                        <div className="flex justify-center gap-3">
                            {[1, 2, 3, 4, 5].map(star => (<i key={star} onClick={() => setForm({...form, rating: star})} className={`fas fa-star text-3xl cursor-pointer transition ${star <= form.rating ? 'text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]' : 'text-slate-700'}`}></i>))}
                        </div>
                        <div className="text-xs font-bold text-[#FFD700] mt-2">{form.rating} / 5 Bintang</div>
                    </div>
                    <div>
                        <label className="block text-slate-400 text-xs font-bold mb-2">Detail Masukan / Kritik / Saran</label>
                        <textarea rows="5" className="w-full p-4 os-input rounded-xl text-sm" placeholder="Tuliskan evaluasi Anda..." value={form.content} onChange={e => setForm({...form, content: e.target.value})}></textarea>
                    </div>
                </div>
                <div className="p-4 border-t border-white/10 bg-[#050505]/80 z-10 flex-none flex gap-3">
                    <button disabled={loading} onClick={onBack} className="flex-1 py-3 text-xs font-bold text-slate-400 hover:text-white">BATAL</button>
                    <button disabled={loading} onClick={handleSubmit} className="flex-1 btn-gold py-3 rounded-xl text-xs font-bold">{loading ? "MENGIRIM..." : "KIRIM EVALUASI"}</button>
                </div>
            </div>
        );
    }
</script>
