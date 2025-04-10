import { useState } from 'react';
import axios from 'axios';

function AlimonyCal() {
  const [form, setForm] = useState({
    husbandAge: '',
    wifeAge: '',
    duration: '',
    husbandIncome: '',
    wifeIncome: '',
    wifeEducation: '',
    children: '',
    careerSacrifice: false,
    domesticAbuse: false,
    divorceFiledBy: '',
    otherDetails: ''
  });

  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setReply('');
    setLoading(true);

    try {
      const res = await axios.post('https://alumni-calculator-server.onrender.com/api/gemini', form);
      setReply(res.data.reply);
    } catch (err) {
      setReply("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6">💍 Alimony Calculator AI</h1>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="husbandAge" type="number" placeholder="Husband's Age" value={form.husbandAge} onChange={handleChange} className="input border p-2 rounded-md" />
            <input name="wifeAge" type="number" placeholder="Wife's Age" value={form.wifeAge} onChange={handleChange} className="input border p-2 rounded-md" />
            <input name="duration" type="number" placeholder="Years Married" value={form.duration} onChange={handleChange} className="input border p-2 rounded-md" />
            <input name="husbandIncome" type="number" placeholder="Husband's Income (₹/month)" value={form.husbandIncome} onChange={handleChange} className="input border p-2 rounded-md" />
            <input name="wifeIncome" type="number" placeholder="Wife's Income (₹/month)" value={form.wifeIncome} onChange={handleChange} className="input border p-2 rounded-md" />
            <input name="children" type="number" placeholder="No. of Children" value={form.children} onChange={handleChange} className="input border p-2 rounded-md" />

            <select name="wifeEducation" value={form.wifeEducation} onChange={handleChange} className="input border p-2 rounded-md">
              <option value="">Wife's Education</option>
              <option value="None">None</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Other">Other</option>
            </select>

            <select name="divorceFiledBy" value={form.divorceFiledBy} onChange={handleChange} className="input border p-2 rounded-md">
              <option value="">Divorce Filed By</option>
              <option value="Husband">Husband</option>
              <option value="Wife">Wife</option>
              <option value="Mutual">Mutual</option>
            </select>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" name="careerSacrifice" checked={form.careerSacrifice} onChange={handleChange} />
            <label>Did wife sacrifice career?</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="domesticAbuse" checked={form.domesticAbuse} onChange={handleChange} />
            <label>Any domestic violence or abuse?</label>
          </div>

          <textarea
            name="otherDetails"
            placeholder="Other details (like property issues, loans, etc)..."
            value={form.otherDetails}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded-md"
          />

          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
            {loading ? 'Calculating...' : 'Get Suggestion'}
          </button>
        </form>

        {reply && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl">
            <h2 className="font-semibold mb-2">🔍 AI Suggestion:</h2>
            <p className="whitespace-pre-line">{reply}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlimonyCal;
