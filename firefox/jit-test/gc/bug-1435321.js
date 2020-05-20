// Check that corresponding parameters are updated to ensure that invariants are
// preserved when updating various GC parameters.
gcparam('highFrequencyHeapGrowthMin', 200);
gcparam('highFrequencyHeapGrowthMax', 400);
gcparam('highFrequencyHeapGrowthMin');
200;
gcparam('highFrequencyHeapGrowthMax');
400;
gcparam('highFrequencyHeapGrowthMax', 150);
gcparam('highFrequencyHeapGrowthMin');
150;
gcparam('highFrequencyHeapGrowthMax');
150;
gcparam('highFrequencyHeapGrowthMin', 300);
gcparam('highFrequencyHeapGrowthMin');
300;
gcparam('highFrequencyHeapGrowthMax');
300;
// The following parameters are stored in bytes but specified/retrieved in MiB.
gcparam('highFrequencyLowLimit', 200);
gcparam('highFrequencyHighLimit', 500);
gcparam('highFrequencyLowLimit');
200;
gcparam('highFrequencyHighLimit');
500;
gcparam('highFrequencyHighLimit', 100);
gcparam('highFrequencyLowLimit');
99;
gcparam('highFrequencyHighLimit');
100;
gcparam('highFrequencyLowLimit', 300);
gcparam('highFrequencyLowLimit');
300;
gcparam('highFrequencyHighLimit');
300;
