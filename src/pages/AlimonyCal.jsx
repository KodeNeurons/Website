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
    otherDetails: '',
    husbandEmploymentType: '',
    wifeHealthCondition: '',
    jointAssets: '',
    livingStandard: '',
    custodyDecision: ''
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
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6">💍 Alimony Calculator </h1>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required name="husbandAge" type="number" placeholder="Husband's Age" value={form.husbandAge} onChange={handleChange} className="input border p-2 rounded-md" />
            <input required name="wifeAge" type="number" placeholder="Wife's Age" value={form.wifeAge} onChange={handleChange} className="input border p-2 rounded-md" />
            <input required name="duration" type="number" placeholder="Years Married" value={form.duration} onChange={handleChange} className="input border p-2 rounded-md" />
            <input required name="husbandIncome" type="number" placeholder="Husband's Income (₹/month)" value={form.husbandIncome} onChange={handleChange} className="input border p-2 rounded-md" />
            <input required name="wifeIncome" type="number" placeholder="Wife's Income (₹/month)" value={form.wifeIncome} onChange={handleChange} className="input border p-2 rounded-md" />
            <input required name="children" type="number" placeholder="No. of Children" value={form.children} onChange={handleChange} className="input border p-2 rounded-md" />

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

            <select name="husbandEmploymentType" value={form.husbandEmploymentType} onChange={handleChange} className="input border p-2 rounded-md">
              <option value="">Husband's Employment Type</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
              <option value="Business">Business</option>
            </select>

            <select name="wifeHealthCondition" value={form.wifeHealthCondition} onChange={handleChange} className="input border p-2 rounded-md">
              <option value="">Wife's Health Condition</option>
              <option value="Good">Good</option>
              <option value="Moderate">Moderate</option>
              <option value="Poor">Poor</option>
            </select>

            <select name="livingStandard" value={form.livingStandard} onChange={handleChange} className="input border p-2 rounded-md">
              <option value="">Living Standard</option>
              <option value="Low">Low</option>
              <option value="Mid">Mid</option>
              <option value="High">High</option>
            </select>

            <select name="custodyDecision" value={form.custodyDecision} onChange={handleChange} className="input border p-2 rounded-md">
              <option value="">Child Custody Decision</option>
              <option value="Husband">Husband</option>
              <option value="Wife">Wife</option>
              <option value="Mutual">Mutual</option>
              <option value="Undecided">Undecided</option>
            </select>
          </div>

          <div className="mt-2">
            <input name="jointAssets" type="text" placeholder="Joint Assets (e.g., house, land)" value={form.jointAssets} onChange={handleChange} className="w-full border p-2 rounded-md" />
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
            placeholder="Other details (property issues, loans, etc)..."
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
            <h2 className="font-semibold mb-2">🔍 Suggestion:</h2>
            <p className="whitespace-pre-line">{reply}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlimonyCal;
