import React, { useState } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage.js';

function ProgramPage() {
  // States for Create Program form
  const [programData, setProgramData] = useState({
    title: '',
    description: '',
    mentorName: '',
    studentName: '',
    date: ''
  });

  // States for Create Entry form
  const [entryData, setEntryData] = useState({
    saat: '',
    description: '',
    isDone: '',
    konu: '',
    ders: '',
    kitap: '',
    hedef: '',
    programID: ''
  });

  // States for Add Entry to Program
  const [entryId, setEntryId] = useState('');

  // States for Get Program and Get Entry
  const [programIdToFetch, setProgramIdToFetch] = useState('');
  const [programFetched, setProgramFetched] = useState(null);

  const [entryIdToFetch, setEntryIdToFetch] = useState('');
  const [entryFetched, setEntryFetched] = useState(null);

  // === API Functions ===

  const handleCreateProgram = () => {
    axios.post('http://localhost:8080/createProgram', programData)
      .then(response => {
        alert('Program Created!');
        console.log(response.data);
      })
      .catch(error => {
        alert('Error creating program.');
        console.error(error);
      });
  };

  const handleCreateEntry = () => {
    axios.post('http://localhost:8080/createEntry', entryData)
      .then(response => {
        alert('Entry Created!');
        console.log(response.data);
      })
      .catch(error => {
        alert('Error creating entry.');
        console.error(error);
      });
  };

  const handleAddEntry = () => {
    axios.post('http://localhost:8080/addEntryToProgram', {
      EntryID: entryId   // <-- sending capital "EntryID" matching backend
    }, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      alert('Entry added to program!');
      console.log(response.data);
    })
    .catch(error => {
      alert('Error adding entry.');
      console.error(error);
    });
  };

  const handleGetProgram = () => {
    axios.get(`http://localhost:8080/program/${programIdToFetch}`)
      .then(response => {
        setProgramFetched(response.data);
        console.log(response.data);
      })
      .catch(error => {
        alert('Error fetching program.');
        console.error(error);
      });
  };

  const handleGetEntry = () => {
    axios.get(`http://localhost:8080/program-entry/${entryIdToFetch}`)
      .then(response => {
        setEntryFetched(response.data);
        console.log(response.data);
      })
      .catch(error => {
        alert('Error fetching entry.');
        console.error(error);
      });
  };

  // === HTML Return ===

  return (
    <div style={{ padding: 20 }}>
      <h1>Coachify Frontend</h1>

      {/* Create Program Section */}
      <h2>Create Program</h2>
      <input placeholder="Title" value={programData.title} onChange={e => setProgramData({...programData, title: e.target.value})} /><br/>
      <input placeholder="Description" value={programData.description} onChange={e => setProgramData({...programData, description: e.target.value})} /><br/>
      <input placeholder="Mentor Name" value={programData.mentorName} onChange={e => setProgramData({...programData, mentorName: e.target.value})} /><br/>
      <input placeholder="Student Name" value={programData.studentName} onChange={e => setProgramData({...programData, studentName: e.target.value})} /><br/>
      <input placeholder="Date (2025-05-01T15:00:00)" value={programData.date} onChange={e => setProgramData({...programData, date: e.target.value})} /><br/>
      <button onClick={handleCreateProgram}>Create Program</button>

      <hr />

      {/* Create Entry Section */}
      <h2>Create Program Entry</h2>
      <input placeholder="Saat" value={entryData.saat} onChange={e => setEntryData({...entryData, saat: e.target.value})} /><br/>
      <input placeholder="Description" value={entryData.description} onChange={e => setEntryData({...entryData, description: e.target.value})} /><br/>
      <input placeholder="Is Done (true/false)" value={entryData.isDone} onChange={e => setEntryData({...entryData, isDone: e.target.value})} /><br/>
      <input placeholder="Konu" value={entryData.konu} onChange={e => setEntryData({...entryData, konu: e.target.value})} /><br/>
      <input placeholder="Ders" value={entryData.ders} onChange={e => setEntryData({...entryData, ders: e.target.value})} /><br/>
      <input placeholder="Kitap" value={entryData.kitap} onChange={e => setEntryData({...entryData, kitap: e.target.value})} /><br/>
      <input placeholder="Hedef" value={entryData.hedef} onChange={e => setEntryData({...entryData, hedef: e.target.value})} /><br/>
      <input placeholder="Program ID" value={entryData.programID} onChange={e => setEntryData({...entryData, programID: e.target.value})} /><br/>
      <button onClick={handleCreateEntry}>Create Entry</button>

      <hr />

      {/* Add Entry to Program Section */}
      <h2>Add Existing Entry to Program</h2>
      <input placeholder="Entry ID" value={entryId} onChange={e => setEntryId(e.target.value)} /><br/>
      <button onClick={handleAddEntry}>Add Entry to Program</button>

      <hr />

      {/* Get Program Section */}
      <h2>Get Program by ID</h2>
      <input placeholder="Program ID" value={programIdToFetch} onChange={e => setProgramIdToFetch(e.target.value)} /><br/>
      <button onClick={handleGetProgram}>Get Program</button>

      {programFetched && (
        <div>
          <h3>Program Data:</h3>
          <pre>{JSON.stringify(programFetched, null, 2)}</pre>
        </div>
      )}

      <hr />

      {/* Get Entry Section */}
      <h2>Get Entry by ID</h2>
      <input placeholder="Entry ID" value={entryIdToFetch} onChange={e => setEntryIdToFetch(e.target.value)} /><br/>
      <button onClick={handleGetEntry}>Get Entry</button>

      {entryFetched && (
        <div>
          <h3>Entry Data:</h3>
          <pre>{JSON.stringify(entryFetched, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ProgramPage;
