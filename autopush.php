<?php
$commands = [
    'git pull',
    'git add .',
    'git commit -m "fix"',
    'git push'
];

foreach ($commands as $command) {
    echo "Running command: $command\n";
    shell_exec($command);
}
